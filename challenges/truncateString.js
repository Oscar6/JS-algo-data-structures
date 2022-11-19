// Truncate a String

function truncateString(str, num) {
// We start off with a simple if statement to determine one of two outcomes
// If our string length is greater than the num we want to truncate it, 
// we return a slice of our string starting at character 0, 
// and ending at num. 
    if (str.length > num) {
    // We then append our '...' to the end of the string.
        return str.slice(0, num) + "...";
    // If not true, the string length is less than the truncation num. 
    } else {
        // Then return the string.
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);




