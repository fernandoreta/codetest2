var app = angular.module('myrequest', []);
app.controller('MainCtrl', function($scope) {
//alertBox
  // var myFunction = function() {
  //   prompt("WELCOME TO REQUEST APP, Please enter your code:", 'Any code is valid of the demo :D');
  //    //any code is aceptable to this demo
  //   }
  //   //execute the function
  //   myFunction();

// Return the action

  var cleanAccount = function() {
    var account = {
    }
    return account;
  };



  var num = [104];
  var start = Date.now();
  //transactions from scratch
   var cleanTransaction = function() {
    var transaction = {
      title: 'Request order No.'+ num++,
      status: 'started',
      date: start,
      task: ''
    }
    

    return transaction;
  };

  
//transactions by default

  var transactions = [{
    title: 'Request order No. 100',
    date: 'Jan 31, 2017',
    status: 'started',
    task: 'Resume'
  }, {
    title: 'Request order No. 101',
    date: 'March 20, 2017',
    task: 'Fill forms',
    status: 'started'
  }, {
    title: 'Request order No. 102',
    date: 'Dec 30, 2017',
    task: 'Review papework',
    status: 'finished'
  }, {
    title: 'Request order No. 103',
    date: 'Sept 20, 2018',
    task: 'Bank',
    status: 'notstarted'
  }];
  
//clear from zero
  $scope.transaction = cleanTransaction();
  $scope.account = cleanAccount();

  $scope.transactionList = transactions;
 //Submit trans
  $scope.saveTransaction = function() {
    var date = parseFloat($scope.transaction.date);
    var num = parseFloat($scope.account.runningBalance);
    var answer = 0;
    if($scope.transaction.status === 'nostarted'){

    }
    if ($scope.transaction.status === 'started') {
      answer = num + date
    } else {
      answer = num - date
    }
    if($scope.transaction.task === ''){
      alert('Please fill with your task');
      transactions($scope.transaction);
    }else{
      alert('Task filled');
      transactions.push($scope.transaction);
      
    }
    $scope.account.runningBalance = answer;
    $scope.transaction.date = date;
    $scope.transaction = cleanTransaction();
  };



});
