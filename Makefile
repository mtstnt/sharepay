.PHONY: migrate

migrate:
	sqlite3 development.db < database/1__20240529.sql