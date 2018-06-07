up:
	@docker-compose up -d app
.PHONY: up

down:
	@docker-compose down
.PHONY: down

teardown:
	@docker-compose down --rmi local
.PHONY: teardown
