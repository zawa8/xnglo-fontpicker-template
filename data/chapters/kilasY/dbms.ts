export const CHAPTERS = [
  {
    id: 1,
    name: 'DBMS xXbixs',
    content: `
# DBMS xXbixs

DBMS = Database Management System

## SQL Commands:
- CREATE TABLE
- INSERT INTO
- SELECT
- WHERE
- UPDATE
- DELETE
    `,
  },
  {
    id: 2,
    name: 'SQLite xur PyThon',
    content: `
# SQLite xur PyThon

## Connect:
\`\`\`python
import sqlite3
conn = sqlite3.connect("school.db")
cursor = conn.cursor()
\`\`\`

## Create Table:
\`\`\`python
cursor.execute("""
    CREATE TABLE IF NOT EXISTS students (
        rollno INTEGER PRIMARY KEY,
        name TEXT,
        marks INTEGER
    )
""")
\`\`\`

## Insert:
\`\`\`python
cursor.execute("INSERT INTO students VALUES (?, ?, ?)", (1, "Rahul", 85))
conn.commit()
\`\`\`
    `,
  },
];
