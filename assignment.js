// New Assignments
// ================

// 1. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function retNo(a) {
  // Start here
    if(a[0] < a[1]) {
      console.log(a[1], a[a.length-2]);
    } else {
      console.log(a[a.length-2], a[1]);
    }
    return;
}

// 2. Write a JavaScript function which says whether a number is perfect.
//
// In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors,
// that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently,
// a perfect number is a number that is half the sum of all of its positive divisors (including itself).
//
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
// the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6.
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function perfectNo(no) {
  // Start here
  var divisors = [], sum = 0;
  for (var i = 1; i < no; i++) {
      if (no % i === 0 ) {
        divisors.push(no[i]);
        sum += i;
      }
  }

  if (sum === no) {
    console.log(no, 'is a perfect no ');
  }
}


// 3. Write a JavaScript function that returns the longest palindrome in a given string.
//
// In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length
// contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana".
// The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic
// substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".



function palindrome (str) {
  var j = str.length, flag = 0;

  for (var i = 0; i <  str.length / 2; i++) {
    if (str[i] === str[j-i-1]) {
      flag = 1;
    } else {
      flag = 0;
      return false;
    }
  }

  if (flag) {
    return 1;
  }
}



function find_Palindrome(str) {
  // Start here
  var maxLength = 1, k, Start = 0, end = 1;
  str = str.split('');


  for (var i = 2; i <= str.length; i++) {

    for (var j = 0; j <= str.length - i; j++) {
      if (palindrome(str.slice(j, j + i))) {
        maxLength = i;
        start = j, end = i + j - 1;
      }
    }
  }
  result = str.splice(start, end + 1);
  console.log('maxLength palindrome substring is', result.join(''), result.length);
}

// 4. Write a JavaScript function to check whether an `input` is a date object or not.
//
// Test Data :
// console.log(is_date("October 13, 2014 11:13:00"));
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([1, 2, 4, 0]));
//
// Output :
// false
// true
// true
// false

function is_date(date) {
  // Start here
  if (date instanceof Date) {
    return 1;
  } else {
    return 0;
  }
}

// 5. Write a JavaScript function to get the number of days in a month.
//
// Test Data :
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
//
// Output :
// 31
// 29
// 30
// 31

function getDaysInMonth(month, year) {

  switch (month) {
    case 1: return 31;
    case 2: return(
      d = new Date(year, month)
      b = new Date(year, month-1)
      days = (Date.parse(d) - Date.parse(b)) / (24*60*60*1000);
      // console.log(days);
      return days
    );

    case 3: return 31;
    case 4: return 30
    case 5: return 31
    case 6: return 30
    case 7: return 31
    case 8: return 31
    case 9: return 30
    case 10: return 31
    case 11: return 30
    case 12: return 31

    default: return console.log('Date is not valid !!');

  }
}

// 6. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).
//
// Test Data :
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
//
// Output :
// "Date1 = Date2"
// "Date1 > Date2"
// "Date2 > Date1"

function compare_dates(date1, date2) {
  if (Date.parse(date1) - Date.parse(date2) > 0 ) {
    console.log("Date1 > Date2");
  } else if (Date.parse(date1) === Date.parse(date2) {
    console.log("Date1 = Date2");
  }  else {
    console.log("Date1 < Date2");
  }
}

// 7. Write a JavaScript function to get difference between two dates in days.
//
// Test Data :
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));
//
// Output :
// 216
// -28
function date_diff_indays(date1, date2) {

  console.log(var diff =  Math.floor(( Date.parse(date1) - Date.parse(date2) ) / 60*60*24*1000););

}

// 8. Write a JavaScript function to round a number to a given decimal places.
//
// Test Data :
// console.log(precise_round(12.375,2));
// console.log(precise_round(12.37499,2));
// console.log(precise_round(-10.3079499, 3));
//
// Output :
// "12.38"
// "12.37"
// "-10.308"

function precise_round(no, place) {
  no = no.toString().split('');
  round = no.indexOf('.') + place + 1;

  if(no[round] >= 5 ) {
    no[round-1]++;
    no.splice(round)
    console.log(Number(no.join('')));

  } else {
    no.splice(no.indexOf('.') + place + 1)
    console.log(Number(no.join('')))

  }
}

// 9. Write a JavaScript function to round up an integer value to the next multiple of 5.
//
// Test Data :
// console.log(int_round5(32));
// 35
//
// console.log(int_round5(137));
// 140


function int_round5(no) {

  no % 5 === 0 ? console.log(no) : console.log((Math.floor(no / 5) + 1) * 5);

}

// 10. Write a JavaScript function to print an integer with commas as thousands separators.
//
// Test Data :
// console.log(thousands_separators(1000));
// "1,000"
//
// console.log(thousands_separators(10000.23));
// "10,000.23"
//
// console.log(thousands_separators(100000));
// "100,000"

function thousands_separators(no) {

  no = no.toString().split('');

  if(no.indexOf('.') > -1) {
    no = no.splice(no.indexOf('.') - 3, 0, ',');
    console.log(Number(no.join('')));

  } else {
    no.splice(no.indexOf('.') - 2, 0, ',')
    console.log(Number(no.join('')));
  }

}
