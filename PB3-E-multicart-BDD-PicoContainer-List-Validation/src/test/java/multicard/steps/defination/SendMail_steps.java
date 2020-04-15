package multicard.steps.defination;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import multicard.steps.support.MctTestHelper;

public class SendMail_steps {
	String success = "{xpath://div[@class='success grey_tr']";

	// Dependency injection
	MctTestHelper testHelper;

	/** Constructor */
	public SendMail_steps(MctTestHelper testHelper) {
		this.testHelper = testHelper;
	}

	@When("^I navigate to send mail page$")
	public void i_navigate_to_send_mail_page() {
		testHelper.getSendMail().SendmailToAdmin();

	}

	@Then("^I send mail to admin$")
	public void i_send_mail_to_admin() {
	}

}
