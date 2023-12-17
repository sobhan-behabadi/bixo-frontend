const postNewData = async (newData) => {
    // اینجا می‌توانید کد پست داده به سرور را پیاده‌سازی کنید
    const response = await fetch('آدرس-سرور/api/endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // می‌توانید هدرهای دیگر نیز اضافه کنید
        },
        body: JSON.stringify(newData),
    });

    if (!response.ok) {
        throw new Error('خطا در ارسال درخواست پست');
    }

    // در اینجا می‌توانید داده‌های پاسخ را بررسی و یا بازگرداندن آنها انجام دهید
    return response.json();
};
/////////////////////////////////////
const MyComponent = () => {
    const mutation = useMutation(postNewData);

    const handleFormSubmit = async (formData) => {
        try {
            // اجرای mutation با استفاده از داده‌های ورودی
            const result = await mutation.mutateAsync(formData);
            console.log('پست با موفقیت ارسال شد:', result);
        } catch (error) {
            console.error('خطا در ارسال پست:', error.message);
        }
    };

    return (
        <div>
            {/* فرم یا موارد دیگر */}
            <button onClick={() => handleFormSubmit({/* داده‌های فرم یا موارد دیگر */})}>
                ارسال درخواست پست
            </button>
        </div>
    );
};