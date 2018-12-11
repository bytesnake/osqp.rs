var N = null;var searchIndex = {};
searchIndex["osqp"]={"doc":"","items":[[3,"CscMatrix","osqp","A matrix in Compressed Sparse Column format.",N,N],[12,"nrows","","The number of rows in the matrix.",0,N],[12,"ncols","","The number of columns in the matrix.",0,N],[12,"indptr","","The CSC column pointer array.",0,N],[12,"indices","","The CSC index array.",0,N],[12,"data","","The CSC data array.",0,N],[3,"Settings","","The settings used when initialising a solver.",N,N],[3,"DualInfeasibilityCertificate","","A proof of dual infeasibility.",N,N],[3,"Failure","","A problem that failed to be solved.",N,N],[3,"PrimalInfeasibilityCertificate","","A proof of primal infeasibility.",N,N],[3,"Solution","","A solution to a problem.",N,N],[3,"Problem","","An instance of the OSQP solver.",N,N],[4,"LinsysSolver","","The linear system solver for OSQP to use.",N,N],[13,"Qdldl","","",1,N],[13,"MklPardiso","","",1,N],[4,"PolishStatus","","The status of the polish operation.",N,N],[13,"Successful","","",2,N],[13,"Unsuccessful","","",2,N],[13,"Unperformed","","",2,N],[4,"Status","","The result of solving a problem.",N,N],[13,"Solved","","",3,N],[13,"SolvedInaccurate","","",3,N],[13,"MaxIterationsReached","","",3,N],[13,"TimeLimitReached","","",3,N],[13,"PrimalInfeasible","","",3,N],[13,"PrimalInfeasibleInaccurate","","",3,N],[13,"DualInfeasible","","",3,N],[13,"DualInfeasibleInaccurate","","",3,N],[13,"NonConvex","","",3,N],[4,"SetupError","","An error that can occur when setting up the solver.",N,N],[11,"rho","","Sets the ADMM step rho.",4,[[["self"],["f64"]],["settings"]]],[11,"sigma","","Sets the ADMM step sigma.",4,[[["self"],["f64"]],["settings"]]],[11,"scaling","","Sets the number of heuristic data scaling iterations.",4,[[["self"],["option",["u32"]]],["settings"]]],[11,"adaptive_rho","","Enables choosing rho adaptively.",4,[[["self"],["bool"]],["settings"]]],[11,"adaptive_rho_interval","","Sets the number of iterations between rho adaptations.",4,[[["self"],["option",["u32"]]],["settings"]]],[11,"adaptive_rho_tolerance","","Sets the tolerance for adapting rho.",4,[[["self"],["f64"]],["settings"]]],[11,"adaptive_rho_fraction","","Set the interval for adapting rho as a fraction of the setup time.",4,[[["self"],["f64"]],["settings"]]],[11,"max_iter","","Sets the maximum number of ADMM iterations.",4,[[["self"],["u32"]],["settings"]]],[11,"eps_abs","","Sets the absolute convergence tolerance.",4,[[["self"],["f64"]],["settings"]]],[11,"eps_rel","","Sets the relative convergence tolerance.",4,[[["self"],["f64"]],["settings"]]],[11,"eps_prim_inf","","Sets the primal infeasibility tolerance.",4,[[["self"],["f64"]],["settings"]]],[11,"eps_dual_inf","","Sets the dual infeasibility tolerance.",4,[[["self"],["f64"]],["settings"]]],[11,"alpha","","Sets the linear solver relaxation parameter.",4,[[["self"],["f64"]],["settings"]]],[11,"linsys_solver","","Sets the linear system solver to use.",4,[[["self"],["linsyssolver"]],["settings"]]],[11,"delta","","Sets the polishing regularization parameter.",4,[[["self"],["f64"]],["settings"]]],[11,"polish","","Enables polishing the ADMM solution.",4,[[["self"],["bool"]],["settings"]]],[11,"polish_refine_iter","","Sets the number of iterative refinement steps to use when polishing.",4,[[["self"],["u32"]],["settings"]]],[11,"verbose","","Enables writing progress to stdout.",4,[[["self"],["bool"]],["settings"]]],[11,"scaled_termination","","Enables scaled termination criteria.",4,[[["self"],["bool"]],["settings"]]],[11,"check_termination","","Sets the number of ADMM iterations between termination checks.",4,[[["self"],["option",["u32"]]],["settings"]]],[11,"warm_start","","Enables warm starting the primal and dual variables from the previous solution.",4,[[["self"],["bool"]],["settings"]]],[11,"time_limit","","Sets the solve time limit.",4,[[["self"],["option",["duration"]]],["settings"]]],[11,"update_rho","","Sets the ADMM step rho.",5,[[["self"],["f64"]]]],[11,"update_max_iter","","Sets the maximum number of ADMM iterations.",5,[[["self"],["u32"]]]],[11,"update_eps_abs","","Sets the absolute convergence tolerance.",5,[[["self"],["f64"]]]],[11,"update_eps_rel","","Sets the relative convergence tolerance.",5,[[["self"],["f64"]]]],[11,"update_eps_prim_inf","","Sets the primal infeasibility tolerance.",5,[[["self"],["f64"]]]],[11,"update_eps_dual_inf","","Sets the dual infeasibility tolerance.",5,[[["self"],["f64"]]]],[11,"update_alpha","","Sets the linear solver relaxation parameter.",5,[[["self"],["f64"]]]],[11,"update_delta","","Sets the polishing regularization parameter.",5,[[["self"],["f64"]]]],[11,"update_polish","","Enables polishing the ADMM solution.",5,[[["self"],["bool"]]]],[11,"update_polish_refine_iter","","Sets the number of iterative refinement steps to use when polishing.",5,[[["self"],["u32"]]]],[11,"update_verbose","","Enables writing progress to stdout.",5,[[["self"],["bool"]]]],[11,"update_scaled_termination","","Enables scaled termination criteria.",5,[[["self"],["bool"]]]],[11,"update_check_termination","","Sets the number of ADMM iterations between termination checks.",5,[[["self"],["option",["u32"]]]]],[11,"update_warm_start","","Enables warm starting the primal and dual variables from the previous solution.",5,[[["self"],["bool"]]]],[11,"update_time_limit","","Sets the solve time limit.",5,[[["self"],["option",["duration"]]]]],[11,"x","","Returns the primal variables at the solution if the problem is `Solved`.",3,[[["self"]],["option"]]],[11,"solution","","Returns the solution if the problem is `Solved`.",3,[[["self"]],["option",["solution"]]]],[11,"iter","","Returns the number of iterations taken by the solver.",3,[[["self"]],["u32"]]],[11,"setup_time","","Returns the time taken for the setup phase.",3,[[["self"]],["duration"]]],[11,"solve_time","","Returns the time taken for the solve phase.",3,[[["self"]],["duration"]]],[11,"polish_time","","Returns the time taken for the polish phase.",3,[[["self"]],["duration"]]],[11,"run_time","","Returns the total time taken by the solver.",3,[[["self"]],["duration"]]],[11,"rho_updates","","Returns the number of rho updates.",3,[[["self"]],["u32"]]],[11,"rho_estimate","","Returns the current best estimate of rho.",3,[[["self"]],["f64"]]],[11,"x","","Returns the primal variables at the solution.",6,N],[11,"y","","Returns the dual variables at the solution.",6,N],[11,"polish_status","","Returns the status of the polish operation.",6,[[["self"]],["polishstatus"]]],[11,"obj_val","","Returns the primal objective value.",6,[[["self"]],["f64"]]],[11,"pri_res","","Returns the norm of primal residual.",6,[[["self"]],["f64"]]],[11,"dua_res","","Returns the norm of dual residual.",6,[[["self"]],["f64"]]],[11,"delta_y","","Returns the certificate of primal infeasibility.",7,N],[11,"delta_x","","Returns the certificate of dual infeasibility.",8,N],[11,"new","","Initialises the solver and validates the problem.",5,N],[11,"update_lin_cost","","Sets the linear part of the cost function to `q`.",5,N],[11,"update_bounds","","Sets the lower and upper bounds of the constraints to `l` and `u`.",5,N],[11,"update_lower_bound","","Sets the lower bound of the constraints to `l`.",5,N],[11,"update_upper_bound","","Sets the upper bound of the constraints to `u`.",5,N],[11,"warm_start","","Warm starts the primal variables at `x` and the dual variables at `y`.",5,N],[11,"warm_start_x","","Warm starts the primal variables at `x`.",5,N],[11,"warm_start_y","","Warms start the dual variables at `y`.",5,N],[11,"update_P","","Updates the elements of matrix `P` without changing its sparsity structure.",5,[[["self"],["t"]]]],[11,"update_A","","Updates the elements of matrix `A` without changing its sparsity structure.",5,[[["self"],["t"]]]],[11,"update_P_A","","Updates the elements of matrices `P` and `A` without changing either's sparsity structure.",5,[[["self"],["t"],["u"]]]],[11,"solve","","Attempts to solve the quadratic program.",5,[[["self"]],["status"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,N],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,N],[11,"from","","",9,[[["t"]],["t"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"from","","",6,[[["t"]],["t"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"clone","","",0,[[["self"]],["cscmatrix"]]],[11,"clone","","",1,[[["self"]],["linsyssolver"]]],[11,"clone","","",4,[[["self"]],["settings"]]],[11,"clone","","",3,[[["self"]],["status"]]],[11,"clone","","",6,[[["self"]],["solution"]]],[11,"clone","","",7,[[["self"]],["primalinfeasibilitycertificate"]]],[11,"clone","","",8,[[["self"]],["dualinfeasibilitycertificate"]]],[11,"clone","","",9,[[["self"]],["failure"]]],[11,"clone","","",2,[[["self"]],["polishstatus"]]],[11,"drop","","",5,[[["self"]]]],[11,"eq","","",0,[[["self"],["cscmatrix"]],["bool"]]],[11,"ne","","",0,[[["self"],["cscmatrix"]],["bool"]]],[11,"eq","","",1,[[["self"],["linsyssolver"]],["bool"]]],[11,"eq","","",2,[[["self"],["polishstatus"]],["bool"]]],[11,"default","","",4,[[],["settings"]]],[11,"from","","",0,[[["cscmatrix"]],["cscmatrix"]]],[11,"from","","",0,[[["i"]],["cscmatrix"]]],[11,"hash","","",2,N],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]]],"paths":[[3,"CscMatrix"],[4,"LinsysSolver"],[4,"PolishStatus"],[4,"Status"],[3,"Settings"],[3,"Problem"],[3,"Solution"],[3,"PrimalInfeasibilityCertificate"],[3,"DualInfeasibilityCertificate"],[3,"Failure"],[4,"SetupError"]]};
searchIndex["osqp_sys"]={"doc":"","items":[[3,"csc","osqp_sys","Matrix in compressed-column or triplet form",N,N],[12,"nzmax","","< maximum number of entries.",0,N],[12,"m","","< number of rows",0,N],[12,"n","","< number of columns",0,N],[12,"p","","< column pointers (size n+1) (col indices (size nzmax)",0,N],[12,"i","","< row indices, size nzmax starting from 0",0,N],[12,"x","","< numerical values, size nzmax",0,N],[12,"nz","","< # of entries in triplet matrix, -1 for csc",0,N],[3,"OSQPScaling","","Problem scaling matrices stored as vectors",N,N],[12,"c","","< cost function scaling",1,N],[12,"D","","< primal variable scaling",1,N],[12,"E","","< dual variable scaling",1,N],[12,"cinv","","< cost function rescaling",1,N],[12,"Dinv","","< primal variable rescaling",1,N],[12,"Einv","","< dual variable rescaling",1,N],[3,"OSQPSolution","","Solution structure",N,N],[12,"x","","< Primal solution",2,N],[12,"y","","< Lagrange multiplier associated to \\f$l <= Ax <= u\\f$",2,N],[3,"OSQPInfo","","Solver return information",N,N],[12,"iter","","< number of iterations taken",3,N],[12,"status","","< status string, e.g. 'solved'",3,N],[12,"status_val","","< status as c_int, defined in constants.h",3,N],[12,"status_polish","","< polish status: successful (1), unperformed (0), (-1)",3,N],[12,"obj_val","","< primal objective",3,N],[12,"pri_res","","< norm of primal residual",3,N],[12,"dua_res","","< norm of dual residual",3,N],[12,"setup_time","","< time taken for setup phase (seconds)",3,N],[12,"solve_time","","< time taken for solve phase (seconds)",3,N],[12,"update_time","","< time taken for update phase (seconds)",3,N],[12,"polish_time","","< time taken for polish phase (seconds)",3,N],[12,"run_time","","< total time  (seconds)",3,N],[12,"rho_updates","","< number of rho updates",3,N],[12,"rho_estimate","","< best rho estimate so far from residuals",3,N],[3,"OSQPPolish","","Polish structure",N,N],[12,"Ared","","< Active rows of A. <    Ared = vstack[Alow, Aupp]",4,N],[12,"n_low","","< number of lower-active rows",4,N],[12,"n_upp","","< number of upper-active rows",4,N],[12,"A_to_Alow","","< Maps indices in A to indices in Alow",4,N],[12,"A_to_Aupp","","< Maps indices in A to indices in Aupp",4,N],[12,"Alow_to_A","","< Maps indices in Alow to indices in A",4,N],[12,"Aupp_to_A","","< Maps indices in Aupp to indices in A",4,N],[12,"x","","< optimal x-solution obtained by polish",4,N],[12,"z","","< optimal z-solution obtained by polish",4,N],[12,"y","","< optimal y-solution obtained by polish",4,N],[12,"obj_val","","< objective value at polished solution",4,N],[12,"pri_res","","< primal residual at polished solution",4,N],[12,"dua_res","","< dual residual at polished solution",4,N],[3,"OSQPData","","Data structure",N,N],[12,"n","","< number of variables n",5,N],[12,"m","","< number of constraints m",5,N],[12,"P","","< quadratic part of the cost P in csc format (size n x n). It",5,N],[12,"A","","< linear constraints matrix A in csc format (size m x n)",5,N],[12,"q","","< dense array for linear part of cost function (size n)",5,N],[12,"l","","< dense array for lower bound (size m)",5,N],[12,"u","","< dense array for upper bound (size m)",5,N],[3,"OSQPSettings","","Settings struct",N,N],[12,"rho","","< ADMM step rho",6,N],[12,"sigma","","< ADMM step sigma",6,N],[12,"scaling","","< heuristic data scaling iterations. If 0,",6,N],[12,"adaptive_rho","","< boolean, is rho step size adaptive?",6,N],[12,"adaptive_rho_interval","","< Number of iterations between rho",6,N],[12,"adaptive_rho_tolerance","","< Tolerance X for adapting rho. The new rho",6,N],[12,"adaptive_rho_fraction","","< Interval for adapting rho (fraction of",6,N],[12,"max_iter","","< maximum iterations",6,N],[12,"eps_abs","","< absolute convergence tolerance",6,N],[12,"eps_rel","","< relative convergence tolerance",6,N],[12,"eps_prim_inf","","< primal infeasibility tolerance",6,N],[12,"eps_dual_inf","","< dual infeasibility tolerance",6,N],[12,"alpha","","< relaxation parameter",6,N],[12,"linsys_solver","","< linear system solver to use",6,N],[12,"delta","","< regularization parameter for",6,N],[12,"polish","","< boolean, polish ADMM solution",6,N],[12,"polish_refine_iter","","< iterative refinement steps in",6,N],[12,"verbose","","< boolean, write out progres",6,N],[12,"scaled_termination","","< boolean, use scaled termination",6,N],[12,"check_termination","","< integer, check termination",6,N],[12,"warm_start","","< boolean, warm start",6,N],[12,"time_limit","","< maximum seconds allowed to solve",6,N],[3,"OSQPWorkspace","","OSQP Workspace",N,N],[12,"data","","Problem data to work on (possibly scaled)",7,N],[12,"linsys_solver","","Linear System solver structure",7,N],[12,"pol","","Polish structure",7,N],[12,"rho_vec","","< vector of rho values",7,N],[12,"rho_inv_vec","","< vector of inv rho values",7,N],[12,"constr_type","","< Type of constraints: loose (-1), equality (1),",7,N],[12,"x","","< Iterate x",7,N],[12,"y","","< Iterate y",7,N],[12,"z","","< Iterate z",7,N],[12,"xz_tilde","","< Iterate xz_tilde",7,N],[12,"x_prev","","< Previous x",7,N],[12,"z_prev","","< Previous z",7,N],[12,"Ax","","< Scaled A * x",7,N],[12,"Px","","< Scaled P * x",7,N],[12,"Aty","","< Scaled A * x",7,N],[12,"delta_y","","< Difference of consecutive dual iterates",7,N],[12,"Atdelta_y","","< A' * delta_y",7,N],[12,"delta_x","","< Difference of consecutive primal iterates",7,N],[12,"Pdelta_x","","< P * delta_x",7,N],[12,"Adelta_x","","< A * delta_x",7,N],[12,"D_temp","","< temporary primal variable scaling vectors",7,N],[12,"D_temp_A","","< temporary primal variable scaling vectors storing",7,N],[12,"E_temp","","< temporary constraints scaling vectors storing norms of",7,N],[12,"settings","","< Problem settings",7,N],[12,"scaling","","< Scaling vectors",7,N],[12,"solution","","< Problem solution",7,N],[12,"info","","< Solver information",7,N],[12,"timer","","< Timer object",7,N],[12,"first_run","","flag indicating whether the solve function has been run before",7,N],[12,"clear_update_time","","flag indicating whether the update_time should be cleared",7,N],[12,"summary_printed","","< Has last summary been printed? (true/false)",7,N],[3,"linsys_solver","","Define linsys_solver prototype structure",N,N],[12,"type_","","< Linear system solver type (see type.h)",8,N],[12,"solve","","",8,N],[12,"free","","< Free linear system solver",8,N],[12,"update_matrices","","",8,N],[12,"update_rho_vec","","",8,N],[12,"nthreads","","< Number of threads active",8,N],[4,"OSQPTimer","","",N,N],[5,"osqp_set_default_settings","","Set default settings from constants.h file assumes settings already allocated in memory @param settings settings structure",N,N],[5,"osqp_setup","","Initialize OSQP solver allocating memory.",N,N],[5,"osqp_solve","","Solve quadratic program",N,N],[5,"osqp_cleanup","","Cleanup workspace by deallocating memory",N,N],[5,"osqp_update_lin_cost","","Update linear cost in the problem @param  work  Workspace @param  q_new New linear cost @return       Exitflag for errors and warnings",N,N],[5,"osqp_update_bounds","","Update lower and upper bounds in the problem constraints @param  work   Workspace @param  l_new New lower bound @param  u_new New upper bound @return        Exitflag: 1 if new lower bound is not <= than new upper bound",N,N],[5,"osqp_update_lower_bound","","Update lower bound in the problem constraints @param  work   Workspace @param  l_new New lower bound @return        Exitflag: 1 if new lower bound is not <= than upper bound",N,N],[5,"osqp_update_upper_bound","","Update upper bound in the problem constraints @param  work   Workspace @param  u_new New upper bound @return        Exitflag: 1 if new upper bound is not >= than lower bound",N,N],[5,"osqp_warm_start","","Warm start primal and dual variables @param  work Workspace structure @param  x    Primal variable @param  y    Dual variable @return      Exitflag",N,N],[5,"osqp_warm_start_x","","Warm start primal variable @param  work Workspace structure @param  x    Primal variable @return      Exitflag",N,N],[5,"osqp_warm_start_y","","Warm start dual variable @param  work Workspace structure @param  y    Dual variable @return      Exitflag",N,N],[5,"osqp_update_P","","Update elements of matrix P (upper triangular) without changing sparsity structure.",N,N],[5,"osqp_update_A","","Update elements of matrix A without changing sparsity structure.",N,N],[5,"osqp_update_P_A","","Update elements of matrix P (upper triangular) and elements of matrix A without changing sparsity structure.",N,N],[5,"osqp_update_rho","","Update rho. Limit it between RHO_MIN and RHO_MAX. @param  work         Workspace @param  rho_new      New rho setting @return              Exitflag",N,N],[5,"osqp_update_max_iter","","Update max_iter setting @param  work         Workspace @param  max_iter_new New max_iter setting @return              Exitflag",N,N],[5,"osqp_update_eps_abs","","Update absolute tolernace value @param  work        Workspace @param  eps_abs_new New absolute tolerance value @return             Exitflag",N,N],[5,"osqp_update_eps_rel","","Update relative tolernace value @param  work        Workspace @param  eps_rel_new New relative tolerance value @return             Exitflag",N,N],[5,"osqp_update_eps_prim_inf","","Update primal infeasibility tolerance @param  work          Workspace @param  eps_prim_inf_new  New primal infeasibility tolerance @return               Exitflag",N,N],[5,"osqp_update_eps_dual_inf","","Update dual infeasibility tolerance @param  work          Workspace @param  eps_dual_inf_new  New dual infeasibility tolerance @return               Exitflag",N,N],[5,"osqp_update_alpha","","Update relaxation parameter alpha @param  work  Workspace @param  alpha_new New relaxation parameter value @return       Exitflag",N,N],[5,"osqp_update_warm_start","","Update warm_start setting @param  work           Workspace @param  warm_start_new New warm_start setting @return                Exitflag",N,N],[5,"osqp_update_scaled_termination","","Update scaled_termination setting @param  work                 Workspace @param  scaled_termination_new  New scaled_termination setting @return                      Exitflag",N,N],[5,"osqp_update_check_termination","","Update check_termination setting @param  work                   Workspace @param  check_termination_new  New check_termination setting @return                        Exitflag",N,N],[5,"osqp_update_delta","","Update regularization parameter in polish @param  work      Workspace @param  delta_new New regularization parameter @return           Exitflag",N,N],[5,"osqp_update_polish","","Update polish setting @param  work          Workspace @param  polish_new New polish setting @return               Exitflag",N,N],[5,"osqp_update_polish_refine_iter","","Update number of iterative refinement steps in polish @param  work                Workspace @param  polish_refine_iter_new New iterative reginement steps @return                     Exitflag",N,N],[5,"osqp_update_verbose","","Update verbose setting @param  work        Workspace @param  verbose_new New verbose setting @return             Exitflag",N,N],[5,"osqp_update_time_limit","","Update time_limit setting @param  work            Workspace @param  time_limit_new  New time_limit setting @return                 Exitflag",N,N],[6,"linsys_solver_type","","Linear System Solvers *",N,N],[6,"LinSysSolver","","Linear system solver structure (sublevel objects initialize it differently)",N,N],[6,"ffi_osqp_status","","",N,N],[6,"osqp_int","","",N,N],[6,"osqp_float","","",N,N],[17,"QDLDL_SOLVER","","",N,N],[17,"MKL_PARDISO_SOLVER","","",N,N],[17,"OSQP_DUAL_INFEASIBLE_INACCURATE","","",N,N],[17,"OSQP_PRIMAL_INFEASIBLE_INACCURATE","","",N,N],[17,"OSQP_SOLVED_INACCURATE","","",N,N],[17,"OSQP_SOLVED","","",N,N],[17,"OSQP_MAX_ITER_REACHED","","",N,N],[17,"OSQP_PRIMAL_INFEASIBLE","","",N,N],[17,"OSQP_DUAL_INFEASIBLE","","",N,N],[17,"OSQP_SIGINT","","",N,N],[17,"OSQP_TIME_LIMIT_REACHED","","",N,N],[17,"OSQP_NON_CVX","","",N,N],[17,"OSQP_UNSOLVED","","",N,N],[11,"into","","",0,[[["self"]],["u"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]]],"paths":[[3,"csc"],[3,"OSQPScaling"],[3,"OSQPSolution"],[3,"OSQPInfo"],[3,"OSQPPolish"],[3,"OSQPData"],[3,"OSQPSettings"],[3,"OSQPWorkspace"],[3,"linsys_solver"],[4,"OSQPTimer"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);
