class UserMailer < ApplicationMailer

  def notify_admin(params)
    @textarea, @custom_number, @phone_number = params.values_at(:textarea, :custom_number, :phone_number).join(' ')
    mail(to: 'ujinus@gmail.com',
         subject: 'Welcome to My Awesome Site')
  end
end
