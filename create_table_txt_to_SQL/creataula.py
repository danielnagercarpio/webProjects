FILE_PATH = "./pet.txt"
file_stream = open(FILE_PATH)
data = file_stream.read()

def generate_insert_into():
    return "INSERT INTO pet (name,owner,species,sex,birth,death) VALUES ("
def close_insert_into():
    return ");"
def get_lines(data):
    result = data.split("\n")
    result.pop()
    return result
def replace_tabs(line):
    return line.replace("\t", ",")
def replace_comma_comma_string_set_to_null(line):
    result = "'"
    result += line.replace(",","','")
    result += "'"
    result = result.replace("''","NULL")
    return result
print("OUTPUT: ")
lines = get_lines(data)
for line in lines:
    line_parsed = line.replace('\t',',')
    line_parsed = replace_comma_comma_string_set_to_null(line_parsed)
    if len(line_parsed) > 1 and line_parsed[len(line_parsed)-1] == ",":
        line_parsed += "NULL"
    print(generate_insert_into()+line_parsed+close_insert_into())
"""
EXPECTED OUTPUT

INSERT INTO pet (name,owner,species,sex,birth,death) VALUES ('Fluffy','Harold','cat','f','1993-02-04',NULL);
INSERT INTO pet (name,owner,species,sex,birth,death) VALUES ('Claws','Gwen','cat','m','1994-03-17',NULL);
INSERT INTO pet (name,owner,species,sex,birth,death) VALUES ('Buffy','Harold','dog','f','1989-05-13',NULL);
INSERT INTO pet (name,owner,species,sex,birth,death) VALUES ('Fang','Benny','dog','m','1990-08-27',NULL);
INSERT INTO pet (name,owner,species,sex,birth,death) VALUES ('Bowser','Diane','dog','m','1979-08-31','1995-07-29');
INSERT INTO pet (name,owner,species,sex,birth,death) VALUES ('Chirpy','Gwen','bird','f','1998-09-11',NULL);
INSERT INTO pet (name,owner,species,sex,birth,death) VALUES ('Whistler','Gwen','bird',NULL,'1997-12-09',NULL);
INSERT INTO pet (name,owner,species,sex,birth,death) VALUES ('Slim','Benny','snake','m','1996-04-29',NULL);
"""