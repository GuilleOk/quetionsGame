import { test, expect } from '@playwright/test' // el test es el que me permite realizar los test y el
// expect el que chequea que lo que estamos esperando ver exista realmente en el proyecto

// Primero hay que navegar hacia la página a la que se va a hacer el test
test.beforeEach(async ({ page }) => {
// la instancia (page) la aporta playwright y se usa para referirnos a la página a la que deseamos hacer
// el test
  await page.goto('http://localhost:5173/')// este es el servidor por defecto de vite
})

test.describe('testQuestionGame', () => { // el método describe es para crear un grupo de pruebas
  // unitarias
  test('apretar botón', async ({ page }) => {
    await page.getByRole('button', { name: /Reset Game/i }).click() // /Reset Game/i expresión regular
    // para ignorar mayúsculas y minúsculas

    const text = await page.getByTestId('question', { exact: true }) // esto toma el primer elemento que tenga la propiedad
    // data-testid='question' y que coincida exactmente con el valor question porque por ejemplo
    // puede haber un setquestion y sería otra coincidencia que desencadenaría un error al tener
    // más de un resultado para un valor
    await expect(text).toHaveText(/^[a-zA-Z0-9 ,.'"ñÑ:;></?!]+/) // quiere decir que espera que haya
    // un texto que cumpla con esa expresión regular (cualquiera prácticamente, algo bueno porque se
    // espera un texto random)
    setTimeout(async () => { // esto es para poder observar el texto en el video
      console.log('first') // de lo contrario ocurre tan rápido que no lo podemos visualizar
    }, 1000)
  })
})
