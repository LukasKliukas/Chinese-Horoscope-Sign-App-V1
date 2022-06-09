document.querySelector('#inputForm').addEventListener('submit', whatIsYourSign);

function whatIsYourSign(event) {
  event.preventDefault();
  let yearOfBirth = document.querySelector('#yearsNumber').value;

  if (
    yearOfBirth == '1932' ||
    yearOfBirth == '1932' ||
    yearOfBirth == '1944' ||
    yearOfBirth == '1956' ||
    yearOfBirth == '1968' ||
    yearOfBirth == '1980' ||
    yearOfBirth == '1992' ||
    yearOfBirth == '2004' ||
    yearOfBirth == '2016' ||
    yearOfBirth == '2028'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the MONKEY';
  } else if (
    yearOfBirth == '1925' ||
    yearOfBirth == '1937' ||
    yearOfBirth == '1949' ||
    yearOfBirth == '1961' ||
    yearOfBirth == '1973' ||
    yearOfBirth == '1985' ||
    yearOfBirth == '1997' ||
    yearOfBirth == '2009' ||
    yearOfBirth == '2021'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the OX';
  } else if (
    yearOfBirth == '1924' ||
    yearOfBirth == '1936' ||
    yearOfBirth == '1948' ||
    yearOfBirth == '1960' ||
    yearOfBirth == '1972' ||
    yearOfBirth == '1984' ||
    yearOfBirth == '1996' ||
    yearOfBirth == '2008' ||
    yearOfBirth == '2020'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the RAT';
  } else if (
    yearOfBirth == '1926' ||
    yearOfBirth == '1938' ||
    yearOfBirth == '1950' ||
    yearOfBirth == '1962' ||
    yearOfBirth == '1974' ||
    yearOfBirth == '1986' ||
    yearOfBirth == '1998' ||
    yearOfBirth == '2010' ||
    yearOfBirth == '2022'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the TIGER';
  } else if (
    yearOfBirth == '1927' ||
    yearOfBirth == '1939' ||
    yearOfBirth == '1951' ||
    yearOfBirth == '1963' ||
    yearOfBirth == '1975' ||
    yearOfBirth == '1987' ||
    yearOfBirth == '1999' ||
    yearOfBirth == '2011' ||
    yearOfBirth == '2023'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the RABBIT';
  } else if (
    yearOfBirth == '1928' ||
    yearOfBirth == '1940' ||
    yearOfBirth == '1952' ||
    yearOfBirth == '1964' ||
    yearOfBirth == '1976' ||
    yearOfBirth == '1988' ||
    yearOfBirth == '2000' ||
    yearOfBirth == '2012' ||
    yearOfBirth == '2024'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the DRAGON';
  } else if (
    yearOfBirth == '1929' ||
    yearOfBirth == '1941' ||
    yearOfBirth == '1953' ||
    yearOfBirth == '1965' ||
    yearOfBirth == '1977' ||
    yearOfBirth == '1989' ||
    yearOfBirth == '2001' ||
    yearOfBirth == '2013' ||
    yearOfBirth == '2025'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the SNAKE';
  } else if (
    yearOfBirth == '1930' ||
    yearOfBirth == '1942' ||
    yearOfBirth == '1954' ||
    yearOfBirth == '1966' ||
    yearOfBirth == '1978' ||
    yearOfBirth == '1990' ||
    yearOfBirth == '2002' ||
    yearOfBirth == '2014' ||
    yearOfBirth == '2026'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the HORSE';
  } else if (
    yearOfBirth == '1931' ||
    yearOfBirth == '1943' ||
    yearOfBirth == '1955' ||
    yearOfBirth == '1967' ||
    yearOfBirth == '1979' ||
    yearOfBirth == '1991' ||
    yearOfBirth == '2003' ||
    yearOfBirth == '2015' ||
    yearOfBirth == '2027'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the GOAT';
  } else if (
    yearOfBirth == '1933' ||
    yearOfBirth == '1945' ||
    yearOfBirth == '1957' ||
    yearOfBirth == '1969' ||
    yearOfBirth == '1981' ||
    yearOfBirth == '1993' ||
    yearOfBirth == '2005' ||
    yearOfBirth == '2017' ||
    yearOfBirth == '2029'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the ROOSTER';
  } else if (
    yearOfBirth == '1934' ||
    yearOfBirth == '1946' ||
    yearOfBirth == '1958' ||
    yearOfBirth == '1970' ||
    yearOfBirth == '1982' ||
    yearOfBirth == '1994' ||
    yearOfBirth == '2006' ||
    yearOfBirth == '2018' ||
    yearOfBirth == '2030'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the DOG';
  } else if (
    yearOfBirth == '1935' ||
    yearOfBirth == '1947' ||
    yearOfBirth == '1959' ||
    yearOfBirth == '1971' ||
    yearOfBirth == '1983' ||
    yearOfBirth == '1995' ||
    yearOfBirth == '2007' ||
    yearOfBirth == '2019' ||
    yearOfBirth == '2031'
  ) {
    document.getElementById('someText').innerHTML =
      'You were born in the year of the PIG';
  } else {
    document.getElementById('someText').innerHTML =
      'Sorry, we have not found your date';
  }
}
