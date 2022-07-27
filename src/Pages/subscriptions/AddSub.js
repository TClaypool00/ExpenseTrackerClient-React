import SubscriptionForm from "../../components/subscriptions/SubscriptionForm";
import { useEffect } from 'react';
import { title } from '../../helpers/helpers';

function AddSub() {
    useEffect(() => {
        document.title = title + 'Add a subscription';
    })

    return (
        <>
            <h2>Add a subscription</h2>
            <SubscriptionForm />
        </>
    )
}

export default AddSub