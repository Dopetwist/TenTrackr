function EmailPage() {
    return (
        <div id="email-section">
            <div className="email-container">
                <div className="email-head">
                    <p>Send To: </p>

                    <div className="radio-section">
                        <div className="inner-radio">
                            <input type="radio" name="send_email" id="single" value="single" />
                            <label htmlFor="single">Single Tenant</label>
                        </div>

                        <div className="inner-radio">
                            <input type="radio" name="send_email" id="all" value="all" />
                            <label htmlFor="all">All Tenants</label>
                        </div>

                        <div className="inner-radio">
                            <input type="radio" name="send_email" id="selected" value="selected" />
                            <label htmlFor="selected">Property Tenants</label>
                        </div>
                    </div>
                </div>
                <form action="#" method="POST">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="Enter subject" />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows={10} placeholder="Write a Message...">

                    </textarea>

                    <button type="submit" id="send"> Send Email </button>
                </form>
            </div>
        </div>
    )
}

export default EmailPage;