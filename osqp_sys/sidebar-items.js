initSidebarItems({"constant":[["MKL_PARDISO_SOLVER",""],["OSQP_DUAL_INFEASIBLE",""],["OSQP_DUAL_INFEASIBLE_INACCURATE",""],["OSQP_MAX_ITER_REACHED",""],["OSQP_NON_CVX",""],["OSQP_PRIMAL_INFEASIBLE",""],["OSQP_PRIMAL_INFEASIBLE_INACCURATE",""],["OSQP_SIGINT",""],["OSQP_SOLVED",""],["OSQP_SOLVED_INACCURATE",""],["OSQP_TIME_LIMIT_REACHED",""],["OSQP_UNSOLVED",""],["QDLDL_SOLVER",""]],"enum":[["OSQPTimer",""]],"fn":[["osqp_cleanup","Cleanup workspace by deallocating memory"],["osqp_set_default_settings","Set default settings from constants.h file assumes settings already allocated in memory @param settings settings structure"],["osqp_setup","Initialize OSQP solver allocating memory."],["osqp_solve","Solve quadratic program"],["osqp_update_A","Update elements of matrix A without changing sparsity structure."],["osqp_update_P","Update elements of matrix P (upper triangular) without changing sparsity structure."],["osqp_update_P_A","Update elements of matrix P (upper triangular) and elements of matrix A without changing sparsity structure."],["osqp_update_alpha","Update relaxation parameter alpha @param  work  Workspace @param  alpha_new New relaxation parameter value @return       Exitflag"],["osqp_update_bounds","Update lower and upper bounds in the problem constraints @param  work   Workspace @param  l_new New lower bound @param  u_new New upper bound @return        Exitflag: 1 if new lower bound is not <= than new upper bound"],["osqp_update_check_termination","Update check_termination setting @param  work                   Workspace @param  check_termination_new  New check_termination setting @return                        Exitflag"],["osqp_update_delta","Update regularization parameter in polish @param  work      Workspace @param  delta_new New regularization parameter @return           Exitflag"],["osqp_update_eps_abs","Update absolute tolernace value @param  work        Workspace @param  eps_abs_new New absolute tolerance value @return             Exitflag"],["osqp_update_eps_dual_inf","Update dual infeasibility tolerance @param  work          Workspace @param  eps_dual_inf_new  New dual infeasibility tolerance @return               Exitflag"],["osqp_update_eps_prim_inf","Update primal infeasibility tolerance @param  work          Workspace @param  eps_prim_inf_new  New primal infeasibility tolerance @return               Exitflag"],["osqp_update_eps_rel","Update relative tolernace value @param  work        Workspace @param  eps_rel_new New relative tolerance value @return             Exitflag"],["osqp_update_lin_cost","Update linear cost in the problem @param  work  Workspace @param  q_new New linear cost @return       Exitflag for errors and warnings"],["osqp_update_lower_bound","Update lower bound in the problem constraints @param  work   Workspace @param  l_new New lower bound @return        Exitflag: 1 if new lower bound is not <= than upper bound"],["osqp_update_max_iter","Update max_iter setting @param  work         Workspace @param  max_iter_new New max_iter setting @return              Exitflag"],["osqp_update_polish","Update polish setting @param  work          Workspace @param  polish_new New polish setting @return               Exitflag"],["osqp_update_polish_refine_iter","Update number of iterative refinement steps in polish @param  work                Workspace @param  polish_refine_iter_new New iterative reginement steps @return                     Exitflag"],["osqp_update_rho","Update rho. Limit it between RHO_MIN and RHO_MAX. @param  work         Workspace @param  rho_new      New rho setting @return              Exitflag"],["osqp_update_scaled_termination","Update scaled_termination setting @param  work                 Workspace @param  scaled_termination_new  New scaled_termination setting @return                      Exitflag"],["osqp_update_time_limit","Update time_limit setting @param  work            Workspace @param  time_limit_new  New time_limit setting @return                 Exitflag"],["osqp_update_upper_bound","Update upper bound in the problem constraints @param  work   Workspace @param  u_new New upper bound @return        Exitflag: 1 if new upper bound is not >= than lower bound"],["osqp_update_verbose","Update verbose setting @param  work        Workspace @param  verbose_new New verbose setting @return             Exitflag"],["osqp_update_warm_start","Update warm_start setting @param  work           Workspace @param  warm_start_new New warm_start setting @return                Exitflag"],["osqp_warm_start","Warm start primal and dual variables @param  work Workspace structure @param  x    Primal variable @param  y    Dual variable @return      Exitflag"],["osqp_warm_start_x","Warm start primal variable @param  work Workspace structure @param  x    Primal variable @return      Exitflag"],["osqp_warm_start_y","Warm start dual variable @param  work Workspace structure @param  y    Dual variable @return      Exitflag"]],"struct":[["OSQPData","Data structure"],["OSQPInfo","Solver return information"],["OSQPPolish","Polish structure"],["OSQPScaling","Problem scaling matrices stored as vectors"],["OSQPSettings","Settings struct"],["OSQPSolution","Solution structure"],["OSQPWorkspace","OSQP Workspace"],["csc","Matrix in compressed-column or triplet form"],["linsys_solver","Define linsys_solver prototype structure"]],"type":[["LinSysSolver","Linear system solver structure (sublevel objects initialize it differently)"],["ffi_osqp_status",""],["linsys_solver_type","Linear System Solvers *"],["osqp_float",""],["osqp_int",""]]});