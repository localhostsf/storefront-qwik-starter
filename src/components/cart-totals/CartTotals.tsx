import { component$ } from '@builder.io/qwik';
import CartPrice from './CartPrice';

export default component$(() => {
	return (
		<dl class="border-t mt-6 border-gray-200 py-6 space-y-6">
			<div class="flex items-center justify-between">
				<dt class="text-sm">Subtotal</dt>
				<CartPrice field={'subTotalWithTax'} forcedClass="text-sm font-medium text-gray-900" />
			</div>
			<div class="flex items-center justify-between">
				<dt class="text-sm">Shipping</dt>
				<CartPrice field={'shippingWithTax'} forcedClass="text-sm font-medium text-gray-900" />
			</div>
			<div class="flex items-center justify-between border-t border-gray-200 pt-6">
				<dt class="text-base font-medium">Total</dt>
				<CartPrice field={'totalWithTax'} forcedClass="text-sm font-medium text-gray-900" />
			</div>
		</dl>
	);
});
