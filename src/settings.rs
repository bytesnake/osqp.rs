use std::mem;

use {Workspace, float, osqp_sys as ffi};

#[derive(Clone, Copy, Debug, Eq, PartialEq)]
pub enum LinsysSolver {
    SuiteSparse,
    MklPardiso,
    // Prevent exhaustive enum matching
    #[doc(hidden)] __Nonexhaustive,
}

fn u32_to_osqp_int(val: u32) -> ffi::osqp_int {
    val as ffi::osqp_int
}

macro_rules! rust_type {
    (float) => (float);
    (u32) => (u32);
    (option_u32) => (Option<u32>);
    (bool) => (bool);
    (linsys_solver) => (LinsysSolver);
}

macro_rules! convert_rust_type {
    (float, $value:expr) => ($value);
    (u32, $value:expr) => (u32_to_osqp_int($value));
    (option_u32, $value:expr) => (u32_to_osqp_int($value.unwrap_or(0)));
    (bool, $value:expr) => ($value as ffi::osqp_int);
    (linsys_solver, $value:expr) => (
        match $value {
            LinsysSolver::SuiteSparse => ffi::SUITESPARSE_LDL_SOLVER,
            LinsysSolver::MklPardiso => ffi::MKL_PARDISO_SOLVER,
            LinsysSolver::__Nonexhaustive => unreachable!(),
        }
    );
}

macro_rules! settings {
    ($workspace:path, $(#[$doc:meta] $name:ident: $typ:ident $([$update_name:ident, $update_ffi:ident])*,)*) => (
        pub struct Settings {
            pub(crate) inner: ffi::OSQPSettings,
        }

        impl Settings {
            $(
                #[$doc]
                pub fn $name(mut self, value: rust_type!($typ)) -> Settings {
                    self.inner.$name = convert_rust_type!($typ, value);
                    Settings {
                        inner: self.inner
                    }
                }
            )*
        }

        impl Default for Settings {
            fn default() -> Settings {
                unsafe {
                    let mut settings: ffi::OSQPSettings = mem::zeroed();
                    ffi::set_default_settings(&mut settings);
                    Settings {
                        inner: settings
                    }
                }
            }
        }

        impl $workspace {
            $($(
                #[$doc]
                pub fn $update_name(&mut self, value: rust_type!($typ)) {
                    unsafe {
                        ffi::$update_ffi(self.inner, convert_rust_type!($typ, value));
                    }
                }
            )*)*
        }
    );
}

settings! {
    Workspace,

    #[doc = "Set the ADMM step rho."]
    rho: float [update_rho, osqp_update_rho],

    #[doc = "Set the ADMM step sigma."]
    sigma: float,

    #[doc = "
    Set the number of heuristic data scaling iterations.
    
    If `None` scaling is disabled.
    "]
    scaling: option_u32,

    #[doc = "Enable choosing rho adaptively."]
    adaptive_rho: bool,

    #[doc = "
    Set the number of iterations between rho adaptations.
    
    If `None` it is automatic.
    "]
    adaptive_rho_interval: option_u32,

    #[doc = "
    Set the tolerance for adapting rho.
    
    The new rho has to be `x` times larger or `1/x` times smaller than the current rho to trigger a new factorization.
    "]
    adaptive_rho_tolerance: float,

    #[doc = "Set the interval for adapting rho as a fraction of the setup time."]
    adaptive_rho_fraction: float,

    #[doc = "Set the maximum number of ADMM iterations."]
    max_iter: u32 [update_max_iter, osqp_update_max_iter],

    #[doc = "Set the absolute convergence tolerance."]
    eps_abs: float [update_eps_abs, osqp_update_eps_abs],

    #[doc = "Set the relative convergence tolerance."]
    eps_rel: float [update_eps_rel, osqp_update_eps_rel],

    #[doc = "Set the primal infeasibility tolerance."]
    eps_prim_inf: float [update_eps_prim_inf, osqp_update_eps_prim_inf],

    #[doc = "Set the dual infeasibility tolerance."]
    eps_dual_inf: float [update_eps_dual_inf, osqp_update_eps_dual_inf],

    #[doc = "Set the linear solver relaxation parameter."]
    alpha: float [update_alpha, osqp_update_alpha],

    #[doc = "Set the linear system solver to use."]
    linsys_solver: linsys_solver,

    #[doc = "Set the polishing regularization parameter."]
    delta: float [update_delta, osqp_update_delta],

    #[doc = "Enable polishing the ADMM solution."]
    polish: bool [update_polish, osqp_update_polish],

    #[doc = "Set the number of iterative refinement steps to use when polishing."]
    polish_refine_iter: u32 [update_polish_refine_iter, osqp_update_polish_refine_iter],

    #[doc = "Enable writing progress to stdout."]
    verbose: bool [update_verbose, osqp_update_verbose],

    #[doc = "Use scaled termination criteria."]
    scaled_termination: bool [update_scaled_termination, osqp_update_scaled_termination],

    #[doc = "
    Set the number of ADMM iterations between termination checks.
    
    If `None` termination checking is disabled.
    "]
    check_termination: option_u32 [update_check_termination, osqp_update_check_termination],

    #[doc = "Enable warm starting the primal and dual variables from the previous solution."]
    warm_start: bool [update_warm_start, osqp_update_warm_start],
}