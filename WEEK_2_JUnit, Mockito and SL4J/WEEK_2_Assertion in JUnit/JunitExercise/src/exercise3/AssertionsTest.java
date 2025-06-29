package exercise3;

import static org.junit.Assert.*;

import org.junit.Test;

public class AssertionsTest {

	@Test
    public void testAssertEquals() {
        int expected = 10;
        int actual = 5 + 5;
        assertEquals("Expected values to be equal", expected, actual);
    }

    @Test
    public void testAssertTrue() {
        assertTrue("Should return true", 100 > 50);
    }

    @Test
    public void testAssertFalse() {
        assertFalse("Should return false", 10 < 5);
    }

    @Test
    public void testAssertNull() {
        String str = null;
        assertNull("Should be null", str);
    }

    @Test
    public void testAssertNotNull() {
        String str = "JUnit";
        assertNotNull("Should not be null", str);
    }

    @Test
    public void testAssertSame() {
        String str1 = "hello";
        String str2 = str1;
        assertSame("Both should refer to the same object", str1, str2);
    }

    @Test
    public void testAssertNotSame() {
        String str1 = new String("hello");
        String str2 = new String("hello");
        assertNotSame("Should not refer to same object", str1, str2);
    }

    @Test
    public void testAssertArrayEquals() {
        int[] expected = {1, 2, 3};
        int[] actual = {1, 2, 3};
        assertArrayEquals("Arrays should be equal", expected, actual);
    }
}
