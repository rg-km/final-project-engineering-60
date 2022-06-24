package repository

import (
	"database/sql"
	"errors"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}
func (u *UserRepository) Login(username string, password string) (*string, error) {
	var user User
	var sqlStatement string
	sqlStatement = `
		SELECT username FROM user
		WHERE username = ? AND password = ?
	`
	err := u.db.QueryRow(sqlStatement, username, password).Scan(
		&user.Username,
	)

	if err != nil {
		return nil, errors.New("Login Failed")
	}

	return &user.Username, nil
}

func (u *UserRepository) Register(username string, email string, password string) error {
	
	sqlStatement := `
		INSERT INTO users
		(username, email, password)
		VALUES
		(?, ?, ?)
	;`

	_, err := u.db.Exec(sqlStatement, username, email, password)
	if err != nil {
		return err
	}

	return nil
}

func (u *UserRepository) FetchUserRole(username string) (*string, error) {
	var user User
	var sqlStatement string
	//TODO : you must fetch the cart by product id
	//HINT : you can use the where statement
	sqlStatement = `SELECT role FROM user where username = ?`

	err := u.db.QueryRow(sqlStatement, username).Scan(
		&user.Role,
	)

	if err != nil {
		return nil, err
	}
	return &user.Role, nil
}

func (u *UserRepository) FetchUsers() ([]User, error) {
	var users []User
	sqlStatement := "SELECT  username, password FROM user"
	rows, err := u.db.Query(sqlStatement)

	if err != nil {
		return nil, err
	}

	defer rows.Close()
	for rows.Next() {
		var user User
		if err := rows.Scan(
			// &user.ID,
			&user.Username,
			&user.Password,
			// &user.Role,
			// &user.Loggedin,
		); err != nil {
			return users, err
		}
		users = append(users, user)
	}
	return users, nil
}