import Swal from 'sweetalert2'

export const showModal = (type : string, data: string | undefined) => {

    switch (type) {
        case 'info':
            return (Swal.fire({
                title: type,
                text: data,
                icon: 'info',
                confirmButtonText: 'Volver',
            }))
            break;
        case 'warning':
            Swal.fire({
                title: type,
                text: data,
                icon: 'warning',
                confirmButtonText: 'Volver',
            })
            break;
        case 'succes':
            Swal.fire({
                title: type,
                text: data,
                icon: 'success',
                confirmButtonText: 'Volver',
            })
            break;
        default:
            break;
    }
}

export const showToast = (text : string) => {

    const toastMixin = Swal.mixin({
        toast: true,
        customClass: {
            popup: 'colored-toast'
        },
        icon: 'success',
        animation: false,
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 1500,
    });

    toastMixin.fire({
        animation: true,
        title: text
    });
}