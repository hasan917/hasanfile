package multicard.pages.object.model;

import org.openqa.selenium.WebDriver;

public class SendMailPage extends MasterPage {
	String mAdmim = "{xpath://a[contains(text(),'Mail Admin')]";
	String Sub = "{xpath://input[@class='textarea2']";
	String send = "{xpath://input[@name='btnSendMail']";
	String text = "{xpath://textarea[@name='txtMailContent']";

	public SendMailPage(WebDriver driver) {
		super(driver);
	}

	public void SendmailToAdmin() {
		clickElement(getWebElementBy(mAdmim));

		typeText(getWebElementBy(Sub), "Listing product");
		typeText(getWebElementBy(text), "Hey, I want list items on this website");
		clickElement(getWebElementBy(send));

	}

}
