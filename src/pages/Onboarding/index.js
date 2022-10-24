import { x } from '@xstyled/styled-components'
import { useUpdateUser } from 'hooks/users/mutations/updateUser'
import { useCurrentUser } from 'hooks/users/queries/getCurrentUser'
import { Button } from 'components/buttons/Button'
import { OnboardingLayout } from 'core/OnboardingLayout'
import { OnboardingStep } from 'components/onboarding/OnboardingStep'
import { useNavigate } from 'react-router-dom'

const Onboarding = () => {
  const navigate = useNavigate()
  const { data: user, refetch: refetchUser } = useCurrentUser()
  const { mutateAsync: updateUserMutation, error } = useUpdateUser()

  if (error) {
    console.log(error)
  }

  return (
    <OnboardingLayout
      justifyContent={user?.onboardingStepPosition !== 3 && 'space-between'}
    >
      <OnboardingStep user={user} />
      <x.div
        position="fixed"
        left={0}
        bottom={0}
        right={0}
        px={{ _: '30px', lg: '84px' }}
        pb="55px"
        m="auto"
        w="inherit"
        display="flex"
        gap={{ _: '2rem', lg: '5rem' }}
        bg="white"
      >
        {user?.onboardingStepPosition !== 0 && (
          <Button
            text="Anterior"
            buttonStyle="minimal"
            onClick={async () => {
              if (user?.onboardingStepPosition >= 0) {
                await updateUserMutation({
                  onboardingStepPosition: user?.onboardingStepPosition - 1,
                })
                refetchUser()
              }
            }}
          />
        )}
        <Button
          text="Siguiente"
          onClick={async () => {
            if (user?.onboardingStepPosition <= 3) {
              await updateUserMutation({
                onboardingStepPosition:
                  user?.onboardingStepPosition === 3
                    ? -1
                    : user?.onboardingStepPosition + 1,
              })

              refetchUser()
            }
            if (user?.onboardingStepPosition === 3) {
              navigate('/dashboard')
            }
          }}
        />
      </x.div>
    </OnboardingLayout>
  )
}

export default Onboarding
