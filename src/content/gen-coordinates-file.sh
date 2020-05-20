#!/bin/bash

echo "{" > showcase-coordinates.json

counter=1
while [ $counter -le 56 ]
do
  echo "\"p$counter\":{\"lat\":\"\",\"lng\":\"\"}," >> showcase-coordinates.json
  ((counter++))
done

counter=1
while [ $counter -le 61 ]
do
  echo "\"c$counter\":{\"lat\":\"\",\"lng\":\"\"}," >> showcase-coordinates.json
  ((counter++))
done

echo "}" >> showcase-coordinates.json