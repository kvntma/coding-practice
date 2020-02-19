import csv
import sys
# to future me: fix hardcode, use databas_reader.fieldnames to fetch header names.


def import_database():
    dna_dict = []
    TTTTTTCT = []
    AATG = []
    TCTAG = []
    GATA = []
    TATC = []
    GAAA = []
    TCTG = []
    seq_dict = [TTTTTTCT, AATG, TCTAG, GATA, TATC, GAAA, TCTG]
    with open(database_path, newline='') as csvfile:
        database_reader = csv.DictReader(csvfile)
        for row in database_reader:
            dna_dict.append(row)
            TTTTTTCT.append(row['TTTTTTCT'])
            AATG.append(row['AATG'])
            TCTAG.append(row['TCTAG'])
            GATA.append(row['GATA'])
            TATC.append(row['TATC'])
            GAAA.append(row['GAAA'])
            TCTG.append(row['TCTG'])
    return seq_dict


def import_sequence():
    sequence_string = []
    f = open(seq_path, "r")
    sequence_string = f.read()
    return sequence_string


# def dna_compare():
#    return match

database_path = sys.argv[1]
seq_path = sys.argv[2]

if len(sys.argv) > 3:
    print("Error")
    exit()


print(import_database())
print(import_sequence())
