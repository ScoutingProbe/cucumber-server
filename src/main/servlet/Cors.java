package main.servlet;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
/**
 * Servlet Filter implementation class Cors
 */
@WebFilter("/Cors")
public class Cors implements Filter {
	private Logger logger = LoggerFactory.getLogger(Cors.class);

    /**
     * Default constructor. 
     */
    public Cors() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		// Cast the ServletRequest to an HttpServletRequest in order to get the HTTP
		// Method attached with the request
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		logger.trace("CORSFilter HTTP Request: " + httpRequest.getMethod());

		// Authorize domain(s) to consume the content
		/*
		 * I added the domain for the default port of an Angular application More
		 * domains can be added in the second argument of the
		 * Access-Control-Allow-Origin setHeader() method Have the additional domains in
		 * a comma separated list
		 */
		((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin", "http://localhost:4200");

		// Authorize the HTTP methods from which you allow different domains to access
		// your resources
		((HttpServletResponse) response).addHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD, PUT, POST");

		// Cast the ServletResponse to an HttpServletResponse to set a Status Code
		HttpServletResponse httpResponse = (HttpServletResponse) response;

		// For the HTTP OPTIONS method reply with ACCEPTED status code - per the CORS
		// handshake
		if (httpRequest.getMethod().equals("OPTIONS")) {
			// HttpServletResponse.SC_ACCEPTED is the 202 HTTP Status Code
			httpResponse.setStatus(HttpServletResponse.SC_ACCEPTED);
			return;
		}

		// pass the request along the filter chain
		chain.doFilter(request, response);
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
