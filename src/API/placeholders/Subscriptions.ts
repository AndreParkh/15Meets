import { ISubscription } from '../../Components/Subsctiotion/Subscription.interfaces';

const subscription1: ISubscription = {
	id: '1',
	name: 'bich',
	price: 100,
	duration: 10,
	minutes: 60,
	auto_renewal: false
}

const subscription2: ISubscription = {
	id: '2',
	name: 'medium',
	price: 1000,
	duration: 30,
	minutes: 300,
	auto_renewal: false
}

const subscription3: ISubscription = {
	id: '3',
	name: 'rich',
	price: 10000,
	duration: 100,
	minutes: 600,
	auto_renewal: false
}

export const subscriptionList = [
	subscription1,
	subscription2,
	subscription3,
	// Add more subscriptions here...
]