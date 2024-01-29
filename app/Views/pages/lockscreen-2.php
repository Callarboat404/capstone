<?= $this->include('layout/custom-head'); ?>
	</head>

	<body class="page-style1 page-style2 light-mode default-sidebar">
		<div class="d-md-flex">
			<div class="w-40 bg-style h-100vh page-style">
				<div class="page-content">
					<div class="page-single-content">
						<img src="<?php echo base_url('public/assets/images/brand/logo1.png'); ?>" alt="img" class="header-brand-img mb-5">
						<div class="card-body text-white py-5 px-8">
							<img src="<?php echo base_url('public/assets/images/png/1.png'); ?>" alt="img" class="w-100 mx-auto text-center">
						</div>
					</div>
				</div>
			</div>
			<div class="w-80 page-content">
				<div class="page-single-content">
					<div class="card-body p-6">
						<div class="row">
							<div class="col-md-6 mx-auto d-block">
								<div class="text-center mb-4 ">
									<span class="avatar avatar-xxl  brround" style="background-image: url(<?php echo base_url('public/assets/images/users/16.jpg'); ?>)"></span>
								</div>
								<span class="m-4 d-none d-lg-block text-center">
									<span class=""><strong>John Thomson</strong></span>
								</span>
								<div class="form-group">
									<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
								</div>
								<a href="<?php echo base_url('pages/index'); ?>" class="btn btn-lg btn-primary btn-block"><i class="fe fe-arrow-right"></i> Unlock</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
<?= $this->include('layout/custom-footer'); ?>	
	</body>
</html>