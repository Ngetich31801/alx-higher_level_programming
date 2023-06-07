import sys 
import MySQLdb

def list_states(username, password, database):
    # Connect to the MySQL server
    db = MySQLdb.connect(user=username, passwd=password, db=database, host='localhost', port=3306)

    # Create a cursor object to execute SQL queries
    cursor = db.cursor()

    # Execute the SQL query to retrieve all states
    cursor.execute("SELECT * FROM states ORDER BY id ASC")

    # Fetch all the rows returned by the query
    rows = cursor.fetchall()

    # Print the results
    for row in rows:
        print(row)

    # Close the cursor and database connection
    cursor.close()
    db.close()
