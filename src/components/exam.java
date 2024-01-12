import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Result {
    public static void login(int noOfDigitsForThePalindrome, String userId, String password) {

        if (noOfDigitsForThePalindrome <= 0 || !userId.matches("[a-zA-Z0-9]+") || !password.matches("[a-zA-Z0-9]+")) {
            System.out.println("Invalid input");
            return;
        }

        boolean isValidUser = checkUserCredentials(userId, password);

        if (isValidUser) {
            String token = generatePalindromeToken(noOfDigitsForThePalindrome);
            System.out.println("Welcome " + userId + " and the generated token is: " + token);
        } else {
            System.out.println("UserId or password is not valid. Please try again.");
        }
    }

    private static boolean checkUserCredentials(String userId, String password) {
        String[] validUserCredentials = {
                "user1", "pass1",
                "user2", "pass2",
                "user3", "pass3",
                "user4", "pass4",
                "user5", "pass5"
        };

        for (int i = 0; i < validUserCredentials.length; i += 2) {
            if (userId.equals(validUserCredentials[i]) && password.equals(validUserCredentials[i + 1])) {
                return true;
            }
        }

        return false;
    }

    private static String generatePalindromeToken(int noOfDigits) {
        int palindromeNumber = generatePalindromeNumber(noOfDigits);
        return "token-" + palindromeNumber;
    }

    private static int generatePalindromeNumber(int noOfDigits) {
        int palindromeNumber = (int) Math.pow(10, noOfDigits - 1) + 1;
        return palindromeNumber;
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        int noOfDigitsForThePalindrome = Integer.parseInt(bufferedReader.readLine().trim());
        String userId = bufferedReader.readLine();
        String password = bufferedReader.readLine();
        Result.login(noOfDigitsForThePalindrome, userId, password);
        bufferedReader.close();
    }
}
