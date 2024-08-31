/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, grade, age, pf) {
  const NFTdata = {
    name: name,
    grade: grade,
    age: age,
    passOrFail: pf 
  };

  NFTs.push(NFTdata);
  console.log("Successfully added : ", name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i< NFTs.length; i++){
        console.log("Name: ", NFTs[i].name);
        console.log("Grade: ", NFTs[i].grade);
        console.log("Age: ", NFTs[i].age);
        console.log("Pass or Fail: ", NFTs[i].passOrFail);
        console.log("----------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted: ", NFTs.length);
}

// call your functions below this line
mintNFT('Jatin','A',19,'Pass');
mintNFT('Atul Hooda','B',17,'Pass');
mintNFT('Asthu Dalal','A',18,'Pass');
mintNFT('Nikita Sharma','C',20,'Pass');
mintNFT('Aanna','B',20,'Pass');
listNFTs();
getTotalSupply();


