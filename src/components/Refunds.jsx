const Refunds = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 mt-4 rounded-lg shadow-md text-white">
      <h1 className="text-3xl font-bold mb-6 text-white">REFUND POLICY</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>We offer a 7 days "NO QUESTIONS ASKED" refund Policy.</li>
        <li>
          Within the 7 days of your course purchase, you can ask for the refund
          anytime.
        </li>
        <li>
          For refunds, please mail us at{" "}
          <a
            href="mailto:support@namastedev.com"
            className="text-blue-400 underline"
          >
            support@bizzybee.co.in
          </a>
        </li>
        <li>
          In case of course bundle, a refund will be initiated for the whole
          course bundle, and not for individual courses.
        </li>
        <li>
          After the refund is initiated, it takes around 5-7 business days for
          the amount to be reflected in your bank.
        </li>
        <li>
          Please note that once a refund is processed, no further refunds will
          be provided for the same purchase/course.
        </li>
        <li>
          Purchases made using the "Gift-a-course" feature are not eligible for
          a refund.
        </li>
        <li>Refunds are only provided if you have access to the course.</li>
        <li>
          If your email ID is found to be suspicious or involved in malicious
          activity, a refund will not be initiated.
        </li>
        <li>
          If any queries, feel free to contact us at support@bizzybee.co.in
        </li>
      </ul>
    </div>
  );
};

export default Refunds;
