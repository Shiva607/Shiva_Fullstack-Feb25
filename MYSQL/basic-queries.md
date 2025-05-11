# **SQL - MySQL Basic Queries with Explanations**

### Related Shortcuts in MySQL Workbench

| Shortcut               | Description                          |
| ---------------------- | ------------------------------------ |
| `Ctrl + Enter`         | Execute current SQL statement only   |
| `Ctrl + Shift + Enter` | Execute all statements in the editor |
| `Ctrl + Z`             | Undo                                 |
| `Ctrl + Y`             | Redo                                 |
| `Ctrl + /`             | Comment/uncomment selected lines     |

---

## **1. SQL Language Categories**

### **DDL – Data Definition Language**

Used to define and modify the structure of tables and databases.

* `CREATE` – Creates databases or tables.
* `ALTER` – Changes the structure of a table (add/modify/drop/rename columns).
* `DROP` – Deletes a table or database permanently.
* `RENAME` – Renames a table or column.

### **DML – Data Manipulation Language**

Used to manage data inside tables.

* `INSERT` – Adds new records to a table.
* `SELECT` – Retrieves data from a table.
* `UPDATE` – Modifies existing data.
* `DELETE` – Removes data from a table.

### **DCL – Data Control Language**

Used to control transactions and save data permanently.

* `COMMIT` – Saves changes made in the current transaction.
* `ROLLBACK` – Reverts changes made in the current transaction.
* `SAVEPOINT` – Creates a point in a transaction to which you can later roll back.

---

# **2. Demo Queries**

## **Step 1: Create and Use a Database**

```sql
-- Shows all existing databases
SHOW DATABASES;

-- Creates a new database named 'mydb'
CREATE DATABASE mydb;

-- Sets 'mydb' as the current working database
USE mydb;

-- Displays the currently selected database
SELECT DATABASE();
```

---

## **Step 2: Create a Table**

```sql
-- Creates a table named 'employee' with 3 columns: id, name, and salary
CREATE TABLE employee (
    id INT,
    name VARCHAR(25),
    salary INT
);

-- Describes the structure of the table
DESC employee;
```

---

## **Step 3: Alter Table**

```sql
-- Adds a primary key constraint to the 'id' column to ensure unique, non-null values
ALTER TABLE employee ADD PRIMARY KEY(id);

-- Checks the updated table structure
DESC employee;
```

---

## **Step 4: Drop a Table**

```sql
-- Deletes the 'employee' table permanently
DROP TABLE employee;
```

---

## **Step 5: Insert Data into Table**

```sql
-- Adds a full record into the table
INSERT INTO employee VALUES (101, 'ram', 1000);

-- Adds a record with only id and name, salary becomes NULL
INSERT INTO employee(id, name) VALUES (102, 'krishna');

-- Error: Duplicate ID value (primary key violation)
INSERT INTO employee(id, name) VALUES (102, 'krishna');

-- Error: 'id' is missing, which is a NOT NULL field because it's a primary key
INSERT INTO employee(name) VALUES ('krishna');

-- Adds multiple records at once
INSERT INTO employee VALUES 
    (103, 'shiva', 3000),
    (104, 'ganesh', 4000),
    (105, 'bala', 5000);
```

---

## **Step 6: Select Data**

```sql
-- Selects specific columns
SELECT id, name, salary FROM employee;

-- Selects all columns
SELECT * FROM employee;

-- Selects only name and salary columns
SELECT name, salary FROM employee;
```

---

## **Step 7: Update Records**

```sql
-- Updates salary to 7000 for employee with id 102
UPDATE employee SET salary = 7000 WHERE id = 102;

-- Checks updated data
SELECT * FROM employee;
```

---

## **Step 8: Delete Records**

```sql
-- Deletes the employee record where id = 104
DELETE FROM employee WHERE id = 104;

-- Checks remaining records
SELECT * FROM employee;

-- Deletes all records from the table (table structure remains)
DELETE FROM employee;

-- Confirms table is empty
SELECT * FROM employee;
```

---

## **Step 9: Alter Table - Other Operations**

### **Add a New Column**

```sql
-- Adds a new column 'desig' (designation) to the employee table
ALTER TABLE employee ADD desig VARCHAR(30);

-- Verifies new column added
DESC employee;

-- Sets 'developer' as designation for all employees
UPDATE employee SET desig = 'developer';

-- Shows the table with the new data
SELECT * FROM employee;
```

---

### **Modify Column Data Type**

```sql
-- Changes the 'name' column to allow 35 characters instead of 25
ALTER TABLE employee MODIFY name VARCHAR(35);

-- Verifies the change
DESC employee;
```

---

### **Rename a Column**

```sql
-- Renames the column 'name' to 'ename'
ALTER TABLE employee RENAME COLUMN name TO ename;

-- Checks the renamed column
DESC employee;
```

---

### **Rename the Table**

```sql
-- Renames the table from 'employee' to 'emp'
RENAME TABLE employee TO emp;

-- Displays structure of the renamed table
DESC emp;
```

---

### **Drop the Table**

```sql
-- Deletes the 'emp' table permanently
DROP TABLE emp;

-- Verifies table deletion (will show error because the table no longer exists)
DESC emp;
```

---

## **Step 10: Drop the Database**

```sql
-- Deletes the 'emp' table permanently
DROP DATABASE mydb;

-- verify or check details about your database:
SHOW DATABASES;
```

---

## **clear difference** between the `ALTER` and `UPDATE` commands in SQL (especially MySQL), both in purpose and usage:

---

### **`ALTER` – Modify Table Structure**

* **Purpose**: Used to **change the structure** of a table (like adding/removing columns, renaming them, changing data types, etc.).
* **A DDL command** (Data Definition Language).
* **Affects the schema**, not the actual data.

#### ✅ Example:

```sql
-- Add a new column
ALTER TABLE employee ADD desig VARCHAR(30);

-- Rename a column
ALTER TABLE employee RENAME COLUMN name TO ename;
```

---

### **`UPDATE` – Modify Data in Rows**

* **Purpose**: Used to **change the actual data** inside the table rows.
* **A DML command** (Data Manipulation Language).
* **Affects the data**, not the structure.

#### ✅ Example:

```sql
-- Update a single employee's salary
UPDATE employee SET salary = 5000 WHERE id = 101;

-- Update all rows' designation
UPDATE employee SET desig = 'Developer';
```

---

### 🔍 **Quick Comparison Table**

| S.NO | Feature         | `ALTER`                             | `UPDATE`                                   |
| ---- | --------------- | ----------------------------------- | ------------------------------------------ |
| 1    | Purpose         | Changes table structure             | Modifies row data                          |
| 2    | Type            | DDL (Data Definition Language)      | DML (Data Manipulation Language)           |
| 3    | Affects         | Schema (columns, constraints)       | Data (values in rows)                      |
| 4    | Example Action  | Add/rename column                   | Change salary of an employee               |
| 5    | Example Command | `ALTER TABLE employee ADD age INT;` | `UPDATE employee SET age=30 WHERE id=101;` |

---