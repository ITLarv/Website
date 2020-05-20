#!/bin/bash
# Usage:
# chmod +x generate-coordinates-file.sh
# ./generate-coordinates-file.sh -f <INPUT_FILENAME> -o <OUTPUT_FILEAME.json> -p <NUM_OF_P_SHOWCASES> -c <NUM_OF_C_SHOWCASES>
# Exeample:
# ./generate-coordinates-file.sh -f test.txt -o test.json -p 5 -c 5

while getopts f:o:p:c: option
do
case "${option}"
in
f) FILE=${OPTARG};;
o) OUTPUT=${OPTARG};;
p) PORSOHALLEN=${OPTARG};;
c) CHUSET=${OPTARG};;
esac
done

# Make sure all parameters are provided
if [[ -z $FILE ]]; then
  echo "You need to provide a file using the -f flag"
  exit
fi
if [[ -z $OUTPUT ]]; then
  echo "You need to provide an output filename using the -o flag"
  exit
fi
if [[ -z $PORSOHALLEN ]]; then
  echo "You need to provide number of p-numbers the -p flag"
  exit
fi
if [[ -z $CHUSET ]]; then
  echo "You need to provide number of c-numbers the -c flag"
  exit
fi
# Make sure input file exist
if [[ ! -f $FILE ]]; then
  echo "File doesnt exist"
  exit
fi

# Reformat to only keep latlng
grep -oP '(?<= ).*' $FILE > temp

# Make sure p and c ints equal length of latlng's
num_lines=$(wc -l < temp)
added=$(( $PORSOHALLEN + $CHUSET ))
if [[ ! $added -eq $num_lines ]]; then
  echo "Number of c and p doesnt match length of coordinates"
  echo "The file contains $num_lines coordinates but $PORSOHALLEN + $CHUSET = $added"
  exit
fi

echo "{" > $OUTPUT
counter=1
counter2=1
while  IFS= read -r line; do
  if [[ $counter -le $PORSOHALLEN ]]; then
    echo "\"p$counter\": $line," >> $OUTPUT
    ((counter++))
  else
    sed '$ s/.$//' $OUTPUT
    echo "\"c$counter2\": $line," >> $OUTPUT
    ((counter2++))
  fi
  sed '$ s/.$//' $OUTPUT
done < temp
echo "}" >> $OUTPUT

rm temp

# Replace lat and lng to "lat" and "lng"
sed -i -e 's/lat/\"lat\"/g' $OUTPUT
sed -i -r 's/lng/\"lng\"/g' $OUTPUT