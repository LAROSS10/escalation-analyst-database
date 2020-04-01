DROP DATABASE IF EXISTS escalation_analystDB;;
CREATE database escalation_analystDB;

USE escalation_analystDB;

CREATE TABLE cases_detail (
    id INT NOT NULL,
    business_segment VARCHAR(40) NULL,
    issue_type VARCHAR(30) NULL,
    issue_description VARCHAR(100) NULL,
    issue_status VARCHAR(100)NULL,
    PRIMARY KEY (id)

);

CREATE TABLE case_information (
    issue_number INT NOT NULL,
    col TIMESTAMP NOT NULL,    
    requestor varchar(30) NULL,
    financial_impact DECIMAL (10,2) NULL,    
    department_id INT,
    PRIMARY KEY(issue_number)

);

