package main

import (
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"

	"github.com/rg-km/final-project-engineering-60/Backend/api"
	"github.com/rg-km/final-project-engineering-60/Backend/repository"
)

func main() {
	db, err := sql.Open("sqlite3", "database/bhineka.db")

	if err != nil {
		panic(err)
	}
	fmt.Println("database connected!!")
	usersRepo := repository.NewUserRepository(db)
	adminRepo := repository.NewAdminRepository(db)

	mainAPI := api.NewAPI(usersRepo, adminRepo)
	mainAPI.Start()
}
