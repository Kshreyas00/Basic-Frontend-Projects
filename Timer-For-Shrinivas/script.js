const dateInput = document.getElementById("study-date");
const doneBtn = document.getElementById("done-btn");
const resetBtn = document.getElementById("reset-btn");
const timerdisplay = document.getElementById("timer-display");
const motivationMsg = document.getElementById("Motivation-Message");

const MotivationalMessage = [
    "Please Shrinivas Focus On Today like 1 hour to 3 hour to 5 hour.",
    "Focus on Your Work not Others Bro.",
    "Please Dont Watch Reels shrinivas bhai!",
    "WorkHard For Yourself shrinivas.",
    "Hi Shrinivas Apne 1 hour pe focus kr each 1 hour not a day or future.",
    "You're one step closer every single hour, Shrinivas.",
    "Please Shrinivas, no reels — only real goals.",
    "Discipline will take you where motivation can't, Shrinivas.",
    "Shrinivas, start your timer and give your 100%.",
    "Focus on learning, not scrolling, Shrinivas.",
    "Every small step counts, Shrinivas.",
    "Shrinivas, work silently, let results speak loudly.",
    "Don't waste time proving others wrong, prove yourself right, Shrinivas.",
    "Focus on Your Breathing Not Others!",
    "Please Please work hard for your father",
    "Study like there's no tomorrow!",
    "Champions are made from something deep inside!",
    "The only way to do great work is to love what you do!",
    "Strive for progress, not perfection!",
    "Every accomplishment starts with the decision to try!",
    "You didn't come this far to only come this far!",
    "Be fearless in the pursuit of what sets your soul on fire!",
    "Success is walking from failure to failure with no loss of enthusiasm!",
    "Don't wait for opportunity, create it!",
    "The future belongs to those who believe in their dreams!",
    "Work until your idols become your rivals!",
    "Stay hungry, stay foolish!",
    "You are capable of amazing things!",
    "Make yourself proud!",
    "The best time to plant a tree was 20 years ago. The second best time is now!",
    "Your education is a dress rehearsal for a life that is yours to lead!",
    "Keep your eyes on the stars and your feet on the ground!",
    "The only person you should try to be better than is the person you were yesterday!",
    "Success isn't overnight, it's when every day you get a little better!",
    "Don't be afraid to give up the good to go for the great!",
    "I find that the harder I work, the more luck I seem to have!",
    "Success is liking yourself, liking what you do, and liking how you do it!",
    "The secret of getting ahead is getting started!",
    "It's not about being the best, it's about being better than you were yesterday!",
    "A journey of a thousand miles begins with a single step!",
    "Opportunities don't happen, you create them!",
    "Try not to become a person of success, but rather a person of value!",
    "The only impossible journey is the one you never begin!",
    "Don't let yesterday take up too much of today!",
    "You learn more from failure than from success!",
    "It's not whether you get knocked down, it's whether you get up!",
    "Failure is the condiment that gives success its flavor!",
    "If you are working on something that you really care about, you don't have to be pushed!",
    "People who are crazy enough to think they can change the world, are the ones who do!",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do!",
    "We generate fears while we sit. We overcome them by action!",
    "Whether you think you can or think you can't, you're right!",
    "Security is mostly a superstition. Life is either a daring adventure or nothing!",
    "The man who has confidence in himself gains the confidence of others!",
    "The only limit to our realization of tomorrow will be our doubts of today!",
    "Creativity is intelligence having fun!",
    "What you lack in talent can be made up with desire, hustle and giving 110% all the time!",
    "Do what you can with all you have, wherever you are!",
    "Develop an 'Attitude of Gratitude'. Say thank you to everyone you meet!",
    "You are never too old to set another goal or to dream a new dream!",
    "Waste no more time arguing about what a good person should be. Be one!",
    "Stop being afraid of what could go wrong, and start being excited about what could go right!",
    "I'm convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance!",
    "It is never too late to be what you might have been!",
    "The only way to achieve the impossible is to believe it is possible!",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart!",
    "The harder the battle, the sweeter the victory!",
    "A little progress each day adds up to big results!",
    "Don't stop until you're proud!",
    "Discipline is choosing between what you want now and what you want most!",
    "Study while others are sleeping; work while others are loafing!",
    "The difference between ordinary and extraordinary is that little extra!",
    "Your degree is just a piece of paper, your education is seen in your behavior!",
    "Success is no accident. It's hard work, perseverance, learning, studying, sacrifice!",
    "If people are doubting how far you can go, go so far that you can't hear them anymore!",
    "Don't watch the clock; do what it does. Keep going!",
    "The future depends on what you do today!",
    "Your limitation—it's only your imagination!",
    "Sometimes we're tested not to show our weaknesses, but to discover our strengths!",
    "The key to success is to focus on goals, not obstacles!",
    "Dream it. Wish it. Do it!",
    "Success doesn't come from what you do occasionally. It comes from what you do consistently!",
    "The struggle you're in today is developing the strength you need tomorrow!",
    "Don't reduce your standards, increase your effort!",
    "Think like a proton, always positive!",
    "Wake up. Work hard. Repeat!",
    "Be the energy you want to attract!",
    "You don't have to be great to start, but you have to start to be great!",
    "A goal without a plan is just a wish!",
    "Study smart, not just hard!",
    "The pain you feel today will be the strength you feel tomorrow!",
    "Champions keep playing until they get it right!",
    "Hard work beats talent when talent doesn't work hard!",
    "The best view comes after the hardest climb!",
    "Fall seven times, stand up eight!",
    "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change!",
    "Never give up on a dream just because of the time it will take to accomplish it!",
    "Everything you've ever wanted is on the other side of fear!",
    "Life is 10% what happens to you and 90% how you react to it!",
    "Change your thoughts and you change your world!",
    "Either you run the day or the day runs you!",
    "If you can dream it, you can do it!",
    "It's going to be hard, but hard does not mean impossible!",
    "Don't let what you cannot do interfere with what you can do!",
    "Sometimes later becomes never. Do it now!",
    "The way to get started is to quit talking and begin doing!",
    "In the middle of difficulty lies opportunity!",
    "Education is the most powerful weapon which you can use to change the world!",
    "Live as if you were to die tomorrow. Learn as if you were to live forever!",
    "An investment in knowledge pays the best interest!",
    "The beautiful thing about learning is that nobody can take it away from you!",
    "Success is a journey, not a destination!",
    "You are braver than you believe, stronger than you seem, and smarter than you think!",
    "Start where you are. Use what you have. Do what you can!",
    "Everything is hard before it is easy!",
    "You miss 100% of the shots you don't take!",
    "I have not failed. I've just found 10,000 ways that won't work!",
    "A person who never made a mistake never tried anything new!",
    "The best revenge is massive success!",
    "Eighty percent of success is showing up!",
    "Your time is limited, so don't waste it living someone else's life!",
    "If you're going through hell, keep going!",
    "Aim for the moon. If you miss, you may hit a star!",
    "Challenges are what make life interesting. Overcoming them is what makes life meaningful!",
    "I didn't fail the test. I just found 100 ways to do it wrong!",
    "Believe in yourself. You are braver than you think!",
    "Go confidently in the direction of your dreams!",
    "No matter how you feel, get up, dress up, show up, and never give up!",
    "The only person you are destined to become is the person you decide to be!",
    "Forget all the reasons it won't work and believe the one reason that it will!",
    "It always seems impossible until it's done!",
    "Doubt kills more dreams than failure ever will!",
    "Do something today that your future self will thank you for!",
    "Little things make big days!",
    "It's okay to not be perfect!",
    "Today's accomplishments were yesterday's impossibilities!",
    "The only way to learn mathematics is to do mathematics!",
    "Study without desire spoils the memory!",
    "Success is the result of perfection, hard work, learning from failure!",
    "Don't be upset by the results you didn't get with the work you didn't do!",
    "Work hard, stay humble!"
];

// Random motivational message select karo
function showRandomMotivation() {
    const randomIndex = Math.floor(Math.random() * MotivationalMessage.length);
    motivationMsg.textContent = MotivationalMessage[randomIndex];
}

// Page load hote hi motivational message dikhaao
showRandomMotivation();

// Har 10 seconds mein message change karo
setInterval(showRandomMotivation, 10000);

let savedDate = localStorage.getItem('examDate');

if(savedDate){
   dateInput.value = savedDate;
   console.log('Save Date Found: ', savedDate);
} else{
    console.log('No Save date found!');
}

doneBtn.addEventListener("click", function(){
    const selectdate = dateInput.value;

    if (selectdate === '') {
        alert('Please select a date first!');
        return;
    }
    
    // Date ko localStorage mein save kiya.
    localStorage.setItem('examDate', selectdate);
    savedDate = selectdate;
    console.log('Date saved:', selectdate);
    alert('Date saved successfully! ✅');
    
    // Date save hone ke baad timer start karo
    startTimer();
});

function calculateRemainingTime(targetDate) {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;
    
    if (difference <= 0) {
        return { hours: 0, minutes: 0, seconds: 0, expired: true };
    }
    
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { hours, minutes, seconds, expired: false };
}

function updateDisplay(time) {
    const h = String(time.hours).padStart(2, '0');
    const m = String(time.minutes).padStart(2, '0');
    const s = String(time.seconds).padStart(2, '0');
    
    timerdisplay.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
    if (!savedDate) return;
    
    const time = calculateRemainingTime(savedDate);
    
    if (time.expired) {
        timerdisplay.textContent = '00:00:00';
        motivationMsg.textContent = '🎉 Exam time has arrived! All the best Shrinivas! 🎉';
        return;
    }
    
    updateDisplay(time);
    
    setInterval(function() {
        const time = calculateRemainingTime(savedDate);
        
        if (time.expired) {
            timerdisplay.textContent = '00:00:00';
            motivationMsg.textContent = '🎉 Exam time has arrived! All the best Shrinivas! 🎉';
            return;
        }
        
        updateDisplay(time);
    }, 1000);
}

if (savedDate) {
    startTimer();
}

resetBtn.addEventListener("click", function(){
    if(confirm('Are you sure you want to reset? This will delete your saved date.')){
        localStorage.removeItem('examDate');
        dateInput.value = '';
        timerdisplay.textContent = '00:00:00';
        savedDate = null;
        alert('Reset successful! 🔄');
        
        // Reset ke baad bhi motivational message dikhao
        showRandomMotivation();
    }
});