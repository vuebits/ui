all:
	git pull
	npm ci
	npm run docs:build