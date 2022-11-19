// Truncate a String

function truncateString(str, num) {
// Create a simple if statement to determine one of two outcomes
// If the string length is greater than the num, truncate it, 
// return a slice of the string starting at character 0, 
// and ending at num. 
    if (str.length > num) {
    // Append '...' to the end of the string.
        return str.slice(0, num) + "...";
    // If not true, the string length is less than the truncation num. 
    } else {
        // Then return the string.
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);




