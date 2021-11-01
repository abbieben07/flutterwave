
declare class NSFlutterwave extends UIViewController {

	static alloc(): NSFlutterwave; // inherited from NSObject

	static new(): NSFlutterwave; // inherited from NSObject

	amount: string;

	country: string;

	currencyCode: string;

	delegate: NSFlutterwaveDelegate;

	email: string;

	encryptionKey: string;

	firstName: string;

	isPreAuth: boolean;

	isStaging: boolean;

	lastName: string;

	narration: string;

	paymentOptionsToExclude: NSArray<string>;

	phoneNumber: string;

	publicKey: string;

	txRef: string;

	onDismiss(): void;

	payWithView(view: UIViewController): NSFlutterwave;
}

interface NSFlutterwaveDelegate {

	onDismiss(): void;

	onError(data: any, response: any): void;

	onSuccess(data: any, response: any): void;
}
declare var NSFlutterwaveDelegate: {

	prototype: NSFlutterwaveDelegate;
};
