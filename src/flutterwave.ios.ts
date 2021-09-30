import { Frame } from '@nativescript/core';
import { FlutterwaveCommon, Response } from './flutterwave.common';

// @ts-ignore
declare const NSObject, NSFlutterwave, NSFlutterwaveDelegate;

export class Flutterwave extends FlutterwaveCommon {
    private controller;

    constructor() {
        super();
        this.controller = NSFlutterwave.new();
    }

    pay(): Promise<Response> {
        return new Promise((resolve, reject) => {
            this.validate()
                .then(() => {
                    const Delegator = FlutterwaveDelegator.init(resolve, reject);

                    const excludedPayments = [];

                    //if(!this.accountPayments) excludedPayments.push("accountPayments");

                    const controller = this.controller;
                    controller.country = this.country;
                    controller.currencyCode = this.currency;
                    controller.amount = this.amount;
                    controller.email = this.email;
                    controller.firstName = this.firstName;
                    controller.lastName = this.lastName;
                    controller.phoneNumber = this.phoneNumber;
                    controller.narration = this.narration;
                    controller.publicKey = this.publicKey;
                    controller.encryptionKey = this.encryptionKey;
                    controller.transactionRef = this.txRef;
                    controller.isPreAuth = this.isPreAuth;
                    controller.isStaging = this.isStaging;

                    controller.paymentOptionsToExclude = excludedPayments;

                    controller.meta = [{ metaname: 'sdk', metavalue: 'ios' }];
                    controller.delegate = Delegator.new();

                    // @ts-ignore
                    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                    const view = <UIViewController>Frame.topmost().currentPage.ios;
                    controller.initRaveWithView(view);
                })
                .catch(reject);
        });
    }
}

@NativeClass()
class FlutterwaveDelegator extends NSObject implements NSFlutterwaveDelegate {
    static ObjCProtocols = [NSFlutterwaveDelegate];
    private resolve: any;
    private reject: any;

    public static initWithOwner(resolve: any, reject: any) {
        const delegate = super.new() as FlutterwaveDelegator;
        this.resolve = resolve;
        this.reject = reject;
        return delegate;
    }

    onSuccess(reference, response) {
        return this.resolve(new Response(Flutterwave.PAYMENT_SUCCESS, response, reference));
    }

    onError(reference, response) {
        return this.reject(new Response(Flutterwave.PAYMENT_ERROR, response, reference));
    }

    onDismiss() {
        return this.reject(new Response(Flutterwave.PAYMENT_CANCELLED, null));
    }
}
