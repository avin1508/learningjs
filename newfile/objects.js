const users = [
    { name: 'Rahul Sharma', email: 'rahul.sharma@example.com', phone: '9876543210' },
    { name: 'Priya Verma', email: 'priya.verma@example.com', phone: '9876543211' },
    { name: 'Amit Kumar', email: 'amit.kumar@example.com', phone: '9876543212' },
    { name: 'Sneha Singh', email: 'sneha.singh@example.com', phone: '9876543213' },
    { name: 'Vikram Patel', email: 'vikram.patel@example.com', phone: '9876543214' },
    { name: 'Anjali Nair', email: 'anjali.nair@example.com', phone: '9876543215' },
    { name: 'Rohit Gupta', email: 'rohit.gupta@example.com', phone: '9876543216' },
    { name: 'Meera Iyer', email: 'meera.iyer@example.com', phone: '9876543217' },
    { name: 'Arjun Desai', email: 'arjun.desai@example.com', phone: '9876543218' },
    { name: 'Kavita Joshi', email: 'kavita.joshi@example.com', phone: '9876543219' },
    { name: 'Manish Mehta', email: 'manish.mehta@example.com', phone: '9876543220' },
    { name: 'Neha Kapoor', email: 'neha.kapoor@example.com', phone: '9876543221' },
    { name: 'Siddharth Reddy', email: 'siddharth.reddy@example.com', phone: '9876543222' },
    { name: 'Pooja Bhatia', email: 'pooja.bhatia@example.com', phone: '9876543223' },
    { name: 'Rajesh Rao', email: 'rajesh.rao@examplecom', phone: '9876543224' }
];


const allValidEmails = users.every(user => user.email.includes('@') && user.email.split('@')[1].includes('.'));
console.log(allValidEmails);


const user = users.filter(use => use.email === 'rahul.sharma@example.com')
console.log(user)

const numbersum = users.reduce((sum,user)=>sum+parseInt(user.phone,10),0) 
console.log(numbersum)

const finduser = users.filter(user => user.email.endsWith('example.com') && user.phone.startsWith('9876'));
console.log(finduser);

//average of phone length

const averagePhoneLength = users.reduce((sum, user) => sum + user.phone.length, 0) / users.length;
console.log(averagePhoneLength);


//group the name by there first letter
const filterUserByname = users.reduce((acc,user)=>{
    const intitial = user.name.charAt(0);
    if(!acc[intitial]){
        acc[intitial] = [];
    }
    acc[intitial].push(user);
    return acc;
},{})

console.log("filter user by there name are",filterUserByname)
//output

// filter user by there name are {
//     R: [
//       {
//         name: 'Rahul Sharma',
//         email: 'rahul.sharma@example.com',
//         phone: '9876543210'
//       },
//       {
//         name: 'Rohit Gupta',
//         email: 'rohit.gupta@example.com',
//         phone: '9876543216'
//       },
//       {
//         name: 'Rajesh Rao',
//         email: 'rajesh.rao@examplecom',
//         phone: '9876543224'
//       }
//     ],
//     P: [
//       {
//         name: 'Priya Verma',
//         email: 'priya.verma@example.com',
//         phone: '9876543211'
//       },
//       {
//         name: 'Pooja Bhatia',
//         email: 'pooja.bhatia@example.com',
//         phone: '9876543223'
//       }
//     ],
//     A: [
//       {
//         name: 'Amit Kumar',
//         email: 'amit.kumar@example.com',
//         phone: '9876543212'
//       },
//       {
//         name: 'Anjali Nair',
//         email: 'anjali.nair@example.com',
//         phone: '9876543215'
//       },
//       {
//         name: 'Arjun Desai',
//         email: 'arjun.desai@example.com',
//         phone: '9876543218'
//       }
//     ],
//     S: [
//       {
//         name: 'Sneha Singh',
//         email: 'sneha.singh@example.com',
//         phone: '9876543213'
//       },
//       {
//         name: 'Siddharth Reddy',
//         email: 'siddharth.reddy@example.com',
//         phone: '9876543222'
//       }
//     ],
//     V: [
//       {
//         name: 'Vikram Patel',
//         email: 'vikram.patel@example.com',
//         phone: '9876543214'
//       }
//     ],
//     M: [
//       {
//         name: 'Meera Iyer',
//         email: 'meera.iyer@example.com',
//         phone: '9876543217'
//       },
//       {
//         name: 'Manish Mehta',
//         email: 'manish.mehta@example.com',
//         phone: '9876543220'
//       }
//     ],
//     K: [
//       {
//         name: 'Kavita Joshi',
//         email: 'kavita.joshi@example.com',
//         phone: '9876543219'
//       }
//     ],
//     N: [
//       {
//         name: 'Neha Kapoor',
//         email: 'neha.kapoor@example.com',
//         phone: '9876543221'
//       }
//     ]
//   }




//problem name grouop by last character

const groupObjectBylastcharacter = users.reduce((acc,user) =>{
    const lastCharacter = user.name.slice(-1);
    if(!acc[lastCharacter]){
        acc[lastCharacter] = []
    }
    acc[lastCharacter].push(user)
    return acc;
},{})

console.log("here the user group by the last name", groupObjectBylastcharacter)

// sum of ages

const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 40 }
  ];

  const sumOddfAges = people.reduce((acc,p)=>{
    // let sum = acc+p.age;
    // return sum
    return acc+p.age
  },0)

  console.log(sumOddfAges)

  //output    95


  //group the peoples by there age

const peoples = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 40 },
    { name: 'Jake', age: 45 }
  ];


  const groupThePeoplesBythereAge = (peoples) =>{
    const group = {
        'under 30': [],
        '30 - 40' : [],
        '40 and above':[]
    }
    return peoples.reduce((acc,pep)=>{
        {
            const age = pep.age;
            if(age<30)
            {
                acc['under 30'].push(pep)
            }
            else if(age>=30 && age<=40)
            {
                acc['30 - 40'].push(pep)
            }
            else if(age>40){
                acc['40 and above'].push(pep)
            }
        }
        return acc
    },group)
  }
const ans =  groupThePeoplesBythereAge(peoples)
console.log(ans);


//pagingnation
const pagingnation = (users,page,perpage) =>{
    const start = (page-1)*perpage;
    const last = start+perpage;
    return users.slice(start,last)
}


let data = pagingnation(users,2,3)
console.log(data)

//masking the necessary information

function maskEmail(email) {
    const [name, domain] = email.split('@');
    const maskedName = name[0] + '*'.repeat(name.length - 1);
    return `${maskedName}@${domain}`;
  }
  
  
  const maskedUsers = users.map(user => ({
    ...user,
    email: maskEmail(user.email)
  }));
  console.log(maskedUsers);

  //filtered people by area code
  const filterUserByAreacode = (users,areacode) =>{
    const peoples = users.filter(user => user.phone.startsWith(areacode))
    return peoples;
  }

const people3 = filterUserByAreacode(users,'9876')
console.log(people3)