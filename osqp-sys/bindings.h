#ifndef BINDINGS_H
#define BINDINGS_H

#include "osqp/include/osqp.h"

// Ensure all status values have the same type. By default positive values are given type c_uint
// and negative c_int.

enum expand_ffi_osqp_status {
    FFI_OSQP_DUAL_INFEASIBLE_INACCURATE = OSQP_DUAL_INFEASIBLE_INACCURATE,
    FFI_OSQP_PRIMAL_INFEASIBLE_INACCURATE = OSQP_PRIMAL_INFEASIBLE_INACCURATE,
    FFI_OSQP_SOLVED_INACCURATE = OSQP_SOLVED_INACCURATE,
    FFI_OSQP_SOLVED = OSQP_SOLVED,
    FFI_OSQP_MAX_ITER_REACHED = OSQP_MAX_ITER_REACHED,
    FFI_OSQP_PRIMAL_INFEASIBLE = OSQP_PRIMAL_INFEASIBLE,
    FFI_OSQP_DUAL_INFEASIBLE = OSQP_DUAL_INFEASIBLE,
    FFI_OSQP_SIGINT = OSQP_SIGINT,
    FFI_OSQP_UNSOLVED = OSQP_UNSOLVED
};

#undef OSQP_DUAL_INFEASIBLE_INACCURATE
#undef OSQP_PRIMAL_INFEASIBLE_INACCURATE
#undef OSQP_SOLVED_INACCURATE
#undef OSQP_SOLVED
#undef OSQP_MAX_ITER_REACHED
#undef OSQP_PRIMAL_INFEASIBLE
#undef OSQP_DUAL_INFEASIBLE
#undef OSQP_SIGINT
#undef OSQP_UNSOLVED

enum ffi_osqp_status {
    OSQP_DUAL_INFEASIBLE_INACCURATE = FFI_OSQP_DUAL_INFEASIBLE_INACCURATE,
    OSQP_PRIMAL_INFEASIBLE_INACCURATE = FFI_OSQP_PRIMAL_INFEASIBLE_INACCURATE,
    OSQP_SOLVED_INACCURATE = FFI_OSQP_SOLVED_INACCURATE,
    OSQP_SOLVED = FFI_OSQP_SOLVED,
    OSQP_MAX_ITER_REACHED = FFI_OSQP_MAX_ITER_REACHED,
    OSQP_PRIMAL_INFEASIBLE = FFI_OSQP_PRIMAL_INFEASIBLE,
    OSQP_DUAL_INFEASIBLE = FFI_OSQP_DUAL_INFEASIBLE,
    OSQP_SIGINT = FFI_OSQP_SIGINT,
    OSQP_UNSOLVED = FFI_OSQP_UNSOLVED
};

#endif