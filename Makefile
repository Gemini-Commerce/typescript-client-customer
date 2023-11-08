version=1.0.0

generate:
	$(MAKE) -C ./modules/client-generator/ generate-client service=customer version=${version}
