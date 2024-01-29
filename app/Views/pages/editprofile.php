<?= $this->include('layout/head'); ?>

		<!-- INTERNAL CSS START -->
		<!-- Select2 css -->
		<link href="<?php echo base_url('public/assets/plugins/select2/select2.min.css'); ?>" rel="stylesheet" />
		<!-- INTERNAL CSS END -->
	</head>

<?= $this->include('layout/menu'); ?>

						<!--Page header-->
						<div class="page-header">
							<div class="page-leftheader">
								<h4 class="page-title">EditProfile</h4>
							</div>
							<div class="page-rightheader ml-auto d-lg-flex d-none">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="#" class="d-flex"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"/><path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3"/></svg><span class="breadcrumb-icon"> Home</span></a></li>
									<li class="breadcrumb-item"><a href="#">Pages</a></li>
									<li class="breadcrumb-item active" aria-current="page">EditProfile</li>
								</ol>
							</div>
						</div>
						<!--End Page header-->

						<!-- Row -->
						<div class="row">
							<div class="col-xl-4 col-lg-5">
								<div class="card box-widget widget-user">
									<div class="widget-user-image mx-auto mt-5 text-center"><img alt="User Avatar" class="rounded-circle" src="<?php echo base_url('public/assets/images/users/16.jpg'); ?>"></div>
									<div class="card-body text-center">
										<div class="pro-user">
											<h3 class="pro-user-username text-dark mb-1">Jenna Side</h3>
											<h6 class="pro-user-desc text-muted">Web Designer</h6>
											<a href="<?php echo base_url('pages/profile'); ?>" class="btn btn-primary mt-3">View Profile</a>
										</div>
									</div>
									<div class="card-footer p-0">
										<div class="row">
											<div class="col-sm-6 border-right text-center">
												<div class="description-block p-4">
													<h5 class="description-header mb-1 font-weight-bold">689k</h5>
													<span class="text-muted">Followers</span>
												</div>
											</div>
											<div class="col-sm-6">
												<div class="description-block text-center p-4">
													<h5 class="description-header mb-1 font-weight-bold">3,765</h5>
													<span class="text-muted">Following</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header">
										<div class="card-title">Edit Password</div>
									</div>
									<div class="card-body">
										<div class="text-center mb-5">
											<img alt="User Avatar" class="rounded-circle  mr-3" src="<?php echo base_url('public/assets/images/users/16.jpg'); ?>">
											<div class="mt-4 ml-0 ml-sm-auto ">
												<a href="#" class="btn btn-primary mb-1">Edit profile</a>
												<a href="#" class="btn btn-danger mb-1">Delete profile</a>
											</div>
										</div>
										<div class="form-group">
											<label class="form-label">Change Password</label>
											<input type="password" class="form-control" value="password">
										</div>
										<div class="form-group">
											<label class="form-label">New Password</label>
											<input type="password" class="form-control" value="password">
										</div>
										<div class="form-group">
											<label class="form-label">Confirm Password</label>
											<input type="password" class="form-control" value="password">
										</div>
									</div>
									<div class="card-footer text-right">
										<a href="#" class="btn btn-primary">Updated</a>
										<a href="#" class="btn btn-danger">Cancle</a>
									</div>
								</div>
							</div>
							<div class="col-xl-8 col-lg-7">
								<div class="card">
									<div class="card-header">
										<div class="card-title">Edit Profile</div>
									</div>
									<div class="card-body">
										<div class="card-title font-weight-bold">Basci info:</div>
										<div class="row">
											<div class="col-sm-6 col-md-6">
												<div class="form-group">
													<label class="form-label">First Name</label>
													<input type="text" class="form-control" placeholder="First Name">
												</div>
											</div>
											<div class="col-sm-6 col-md-6">
												<div class="form-group">
													<label class="form-label">Last Name</label>
													<input type="text" class="form-control" placeholder="Last Name">
												</div>
											</div>
											<div class="col-sm-6 col-md-6">
												<div class="form-group">
													<label class="form-label">Email address</label>
													<input type="email" class="form-control" placeholder="Email">
												</div>
											</div>
											<div class="col-sm-6 col-md-6">
												<div class="form-group">
													<label class="form-label">Phone Number</label>
													<input type="number" class="form-control" placeholder="Number">
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-label">Address</label>
													<input type="text" class="form-control" placeholder="Home Address">
												</div>
											</div>
											<div class="col-sm-6 col-md-4">
												<div class="form-group">
													<label class="form-label">City</label>
													<input type="text" class="form-control" placeholder="City">
												</div>
											</div>
											<div class="col-sm-6 col-md-3">
												<div class="form-group">
													<label class="form-label">Postal Code</label>
													<input type="number" class="form-control" placeholder="ZIP Code">
												</div>
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="form-label">Country</label>
													<select class="form-control nice-select select2">
														<optgroup label="Categories">
															<option data-select2-id="5">--Select--</option>
															<option value="1">Germany</option>
															<option value="2">Real Estate</option>
															<option value="3">Canada</option>
															<option value="4">Usa</option>
															<option value="5">Afghanistan</option>
															<option value="6">Albania</option>
															<option value="7">China</option>
															<option value="8">Denmark</option>
															<option value="9">Finland</option>
															<option value="10">India</option>
															<option value="11">Kiribati</option>
															<option value="12">Kuwait</option>
															<option value="13">Mexico</option>
															<option value="14">Pakistan</option>
														</optgroup>
													</select>
												</div>
											</div>
										</div>
										<div class="card-title font-weight-bold mt-5">External Links:</div>
										<div class="row">
											<div class="col-sm-6 col-md-6">
												<div class="form-group">
													<label class="form-label">Facebook</label>
													<input type="text" class="form-control" placeholder="https://www.facebook.com/">
												</div>
											</div>
											<div class="col-sm-6 col-md-6">
												<div class="form-group">
													<label class="form-label">Google</label>
													<input type="text" class="form-control" placeholder="https://www.google.com/">
												</div>
											</div>
											<div class="col-sm-6 col-md-6">
												<div class="form-group">
													<label class="form-label">Twitter</label>
													<input type="text" class="form-control" placeholder="https://twitter.com/">
												</div>
											</div>
											<div class="col-sm-6 col-md-6">
												<div class="form-group">
													<label class="form-label">Pinterest</label>
													<input type="text" class="form-control" placeholder="https://in.pinterest.com/">
												</div>
											</div>
										</div>
										<div class="card-title font-weight-bold mt-5">About:</div>
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-label">About Me</label>
													<textarea rows="5" class="form-control" placeholder="Enter About your description"></textarea>
												</div>
											</div>
										</div>
									</div>
									<div class="card-footer text-right">
										<a href="#" class="btn btn-lg btn-primary">Updated</a>
										<a href="#" class="btn btn-lg btn-danger">Cancle</a>
									</div>
								</div>
							</div>
						</div>
						<!-- End Row-->
<?= $this->include('layout/footer'); ?>

		<!-- INTERNAL JS START -->
		<!--Select2 js -->
		<script src="<?php echo base_url('public/assets/plugins/select2/select2.full.min.js'); ?>"></script>
		<script src="<?php echo base_url('public/assets/js/select2.js'); ?>"></script>
		<!-- INTERNAL JS END -->
	</body>
</html>
