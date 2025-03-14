const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const degen_pasties = new Image();
degen_pasties.src = 'https://raw.githubusercontent.com/Swillycoder/blackpebble/main/degenpasty.png';
const bill = new Image();
bill.src = 'https://raw.githubusercontent.com/Swillycoder/blackpebble/main/billgreen.png';
const larry = new Image();
larry.src = 'https://raw.githubusercontent.com/Swillycoder/blackpebble/main/larrygreen.png';

const lines = [
    "BLACKPEBBLE HACK IN PROGRESS...",
    "LOADING FILES... LARRYSTINK.cab, BILLNOMATES.bin, MASHEDPOTATO.yum",
    "...-...-...... G.A.Y ENCRYPTION CRACKED....",
    "BLACKPEBBLE - OPERATION DEGEN PASTIES - HACK COMPLETE",
    "DOWNLOADING DATA FILES................................ HURRY UP CUNT!",
    "FILES DOWNLOADED - DEGENPASTIES.png",
    "OBTAINING PROFILE - LARRY STINK",
    "OBTAINING PROFILE - BILL NOMATES",
    "REINSTALLING BLACKPEBBLE MAINFRAME TO DEGEN_CRK_01",
    ".....",
    ".....",
    ".....",
    ".....",
    "DATA AQUISITION SERVICES",
    "SWILLYCODER 2025 - ARENA HANDLE - 5pam5pam",
    "I DON'T LIKE SPAM!!!!!",
    "A DOOMER CORP FAN PAGE - ARENA HANDLE - DOOMERGIN - DOOMERCORP"
];

const lines2 = [
    "DOWNLOADED DATA FILE",
    "OPERATION - DEGEN PASTIES",
]

const lines3 = [
    "DOWNLOADED DATA FILE",
    "LARRY STINK - HEAD GIVER, CEO AND G.A.Y OPERATIONS MANAGER",
    "BLACKPEBBLE CORP",
    "MEDICAL CONDITIONS",
    "- REQUIRES NAPPY/DIAPERS CHANGE 2X PER DAY",
    "- REQUIRES HEAVY FLOW TAMPONS",
    "- GOUT", 
    "- TRENCHFOOT", 
    "- ECZEMA ON BALL SAC",
    "- PSORIASIS ON BELLEND",
    "LAST KNOW LOCATION - TURKISH HAIR TRANSPLANT CLINIC",
]

const lines4 = [
    "DOWNLOADED DATA FILE",
    "BILL NOMATES - BILL AND TRANSGENDER MELINDA FOUNDATION",
    "MEDICAL CONDITIONS",
    "- PREGNANCY COMPLICATIONS",
    "- REQUIRES INTRAVENOUS SPERM TRANSFUSION",
    "- BIRTH DEFECTS --->", 
    "- GOGGLED EYES", 
    "- THOUSAND MILE STARE", 
    "- DEVOID OF HUMAN EMOTIONS",
    "LAST KNOW LOCATION --->",
    "MEXICAN BORDER CHILD TRAFFICKING HQ",
]

const lines5 = [
    "THIS IS A FAN PAGE FOR DOOMERCORP",
    "THIS IS NOT AN OFFICIAL DOOMERCORP PAGE",
    "ALL VIEWS ARE MY OWN AND NOT IN LINE WITH DOOMERCORP LORE",
    "I'M MAKING SHIT UP COS I LIKE THE PROJECT",
    "AND I THINK GIVING RICH/ELITE CUNTS SHIT IS GOOD",
    ".....",
    ".....",
    "SWILLYCODER 2025 - ARENA HANDLE - 5pam5pam",
    "WEBPAGE - https://swillycoder.github.io/Tedsindie/",
    "I DON'T LIKKE SPAM!!!!!!",
]

let lineIndex = 0;
let charIndex = 0;
let gameState = "introScreen";
let lastTimeout = performance.now();
//let timeoutDuration = 25;
//let timeoutDuration2 = 200;
let finalDelayStart = null;

function gameLoop() {
    if (gameState === "introScreen") {
        introScreen();
    } else if (gameState === "dataFiles1") {
        dataFiles1();
    } else if (gameState === "dataFiles2") {
        dataFiles2();
    } else if (gameState === "dataFiles3") {
        dataFiles3();
    } else if (gameState === "fanPage") {
        fanPage();
    } 
    requestAnimationFrame(gameLoop);
}

function typeText(text, load, timeout1,timeout2) {
    let currentTime = performance.now();

    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = "50px pixelPurl";
    ctx.fillStyle = 'green';
    ctx.fillText("BLACKPEBBLE G.A.Y MAINFRAME", 50, 70);
    ctx.font = "16px Courier";
    ctx.fillStyle = "green";


    for (let i = 0; i < lineIndex; i++) {
        ctx.fillText(text[i], 50, 100 + i * 25);
    }

    if (lineIndex < text.length) {
        ctx.fillText(text[lineIndex].substring(0, charIndex), 50, 100 + lineIndex * 25);
        if (currentTime - lastTimeout >= timeout1) {
            lastTimeout = currentTime;
            if (charIndex < text[lineIndex].length) {
                charIndex++;

            } else {
                charIndex = 0;
                lineIndex++;
            
            }
        }
    }
    else if (lineIndex === text.length) {
        // Start tracking the final delay when the text finishes
        if (finalDelayStart === null) {
            finalDelayStart = currentTime;
        }
        if (currentTime - finalDelayStart >= timeout2) {
            gameState = load;
            finalDelayStart = null; // Reset final delay
            lineIndex = 0; // Reset text rendering index
            charIndex = 0; // Reset character index
        }
    }
}

function introScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    typeText(lines, "dataFiles1", 25, 2000);
}

function dataFiles1() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(degen_pasties, 100,200)
    typeText(lines2,"dataFiles2",25,5000)
}
function dataFiles2() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(larry, 450,150)
    typeText(lines3,"dataFiles3",25,5000)
}
function dataFiles3() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(bill, 450,150)
    typeText(lines4,"fanPage",25,5000)
}

function fanPage() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    typeText(lines5,"dataFiles1",25,5000)
}

gameLoop();
