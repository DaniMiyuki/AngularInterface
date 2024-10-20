import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AuthGuard', () => {
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let guard: AuthGuard;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    guard = TestBed.inject(AuthGuard);
  });

  it('should allow route access if user is logged in', () => {
    authService.isLoggedIn.and.returnValue(true);  // Simula que o usuário está logado
    const result = guard.canActivate();  // Sem passar parâmetros
    expect(result).toBe(true);
  });

  it('should redirect to login if user is not logged in', () => {
    authService.isLoggedIn.and.returnValue(false);  // Simula que o usuário não está logado
    const result = guard.canActivate();  // Sem passar parâmetros
    expect(result).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);  // Verifica se redirecionou para /login
  });
});
