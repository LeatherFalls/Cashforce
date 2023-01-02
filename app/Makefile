mysql:
	docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql

test-service:
	npx mocha app/backend/src/tests/unit/service/*.test.js

test-controller:
	cd app/backend && npx mocha src/tests/unit/controller/*.test.js

.PHONY: mysql test-service test-controller