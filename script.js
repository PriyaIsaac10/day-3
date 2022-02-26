var objects=[
  {
      person:"name",
      age:2,
      company:"guvi"
  },
  {
      person:"name",
      age:3,
      company:"guvi geek"
  },
  {
      person:"name",
      age:4,
      company:"guvi geek network"
  }

];
// for of loop:
for(var  object of objects)
{
console.log(object);
}

// for each loop:
objects.forEach(((object)=>
{
  console.log(object);
}))
//normal for loop:
for (var i=0; i<objects.length; i++)
{
console.log(objects);
}
// for in loop:
for (var index in objects)
{
console.log(index);
}
