CREATE TABLE Billett (
                         id INTEGER AUTO_INCREMENT NOT NULL,
                         film VARCHAR(50) NOT NULL,
                         fornavn VARCHAR(30) NOT NULL,
                         etternavn VARCHAR(30) NOT NULL,
                         telefonnr CHAR(8) NOT NULL,
                         epost VARCHAR(50) NOT NULL,
                         antall INTEGER NOT NULL,
                         PRIMARY KEY (id)
);
