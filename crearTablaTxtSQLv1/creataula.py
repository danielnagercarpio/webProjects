file = open("pet.txt")
arrays = file.read().split("\t")
string = ""
stringtmp = ""
stringf = []
values = ""
insert = "INSERT INTO pet (name,owner,species,sex,birth,death) "
comanda = ""
for i in range(len(arrays)):
	string = string + "{0},".format(str(arrays[i]))
string = string.split("\n")
for i in range(len(string)):
	stringtmp = string[i].split(",")
	stringf.append(stringtmp)
for i in range(len(stringf)-1):
	for j in range(len(stringf[i])):
		if(j != len(stringf[i])-1 and j > 0 and stringf[i][j] != ''):
			values = values + "\'{0}\',".format(stringf[i][j])
		if (j == 0 and stringf[i][j] != ''):
			values = values + "\nVALUES (\'{0}\',".format(stringf[i][j])
		if (j == len(stringf[i])-1 and stringf[i][j] != ''):
			values = values + "\'{0}\')".format(stringf[i][j])
		if (j == len(stringf[i])-1 and stringf[i][j] == ''):
			values = values + "NULL)"
		if (j == 0 and stringf[i][j] == ''):
			values = values + "\nVALUES (NULL,"
		if(j != len(stringf[i])-1 and j > 0 and stringf[i][j] == ''):
			values = values + "NULL,"
values = values.split("\n")
values = values[1:]
for i in range(len(values)):
	comanda = "{0}{1};".format(insert,values[i])
	print(comanda)
