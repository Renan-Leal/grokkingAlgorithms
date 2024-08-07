public class BinarySearch {
    private static Integer binarySearch(int[] array, int value) {
        int lowerPos = 0;
        int higherPos = array.length - 1;
        while (lowerPos <= higherPos) {
            int midPos = (lowerPos + higherPos) / 2;
            int guessValue = array[midPos];
            if (guessValue == value) {
                return midPos;
            }
            if (guessValue > value) {
                higherPos = midPos - 1;
            } else {
                lowerPos = lowerPos + 1;
            }
        }
        return null;
    }
    
    public static void main(String[] args) {
        int[] array = { 1, 3, 5, 7, 9 };
        int findedPos = binarySearch(array, 9);
        System.out.print("Position: " + findedPos + " Value: " + array[findedPos]);
    }
}
