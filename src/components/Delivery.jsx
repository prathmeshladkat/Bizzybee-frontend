const DeliveryPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 mt-4 rounded-lg shadow-md text-white">
      <h1 className="text-3xl font-bold mb-6 text-white">DELIVERY POLICY</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Service Activation:</strong> Once a user signs up and verifies
          their account, access to the basic features is provided instantly.
          Premium subscriptions or paid features are activated immediately after
          successful payment.
        </li>
        <li>
          <strong>Profile Verification & Approval:</strong> To ensure a safe
          dating experience, user profiles may go through a verification
          process, which can take up to <strong>24-48 hours</strong>. Profiles
          with suspicious activity may be flagged or rejected.
        </li>
        <li>
          <strong>Delivery of Premium Features:</strong> Premium memberships
          (such as chat access, profile boosts, or exclusive matches) are
          activated immediately upon successful payment. If there is any delay,
          users can contact support at support@bizzybee.co.in
        </li>
        <li>
          <strong>Refund & Cancellation:</strong> Since this is a digital
          service, refunds are only applicable under specific conditions as per
          our <strong>Refund Policy</strong>. Subscription cancellations can be
          made anytime but will be effective from the next billing cycle.
        </li>
        <li>
          <strong>Matchmaking & Personalized Services:</strong> If the service
          includes manual matchmaking or personalized recommendations, delivery
          timelines will be communicated to the user at the time of booking.
        </li>
        <li>
          <strong>Technical Issues & Service Downtime:</strong> If the platform
          faces technical issues or downtime affecting service delivery, users
          will be notified in advance via email or in-app notifications.
        </li>
        <li>
          <strong>Customer Support:</strong> For any issues regarding service
          delivery, users can contact customer support at support@bizzybee.co.in
          for assistance.
        </li>
      </ul>
    </div>
  );
};

export default DeliveryPolicy;
