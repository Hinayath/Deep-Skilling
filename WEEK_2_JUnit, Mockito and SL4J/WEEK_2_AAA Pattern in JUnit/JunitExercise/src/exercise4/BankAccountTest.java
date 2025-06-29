package exercise4;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class BankAccountTest {

    private BankAccount account;

    @Before
    public void setUp() {
        account = new BankAccount("Sanjai Jaivardhan", 1000.0);
    }

    @After
    public void tearDown() {
        account = null;
    }

    @Test
    public void testDeposit() {
        account.deposit(500.0);
        assertEquals(1500.0, account.getBalance(), 0.001);
    }

    @Test
    public void testWithdraw() {
        account.withdraw(300.0);
        assertEquals(700.0, account.getBalance(), 0.001);
    }

    @Test
    public void testWithdrawInsufficientBalance() {
        account.withdraw(1500.0);
        assertEquals(1000.0, account.getBalance(), 0.001); // Balance remains unchanged
    }

    @Test
    public void testGetAccountHolder() {
        String name = account.getAccountHolder();
        assertEquals("Sanjai Jaivardhan", name);
    }
}
