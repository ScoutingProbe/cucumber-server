package main.servlet;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GoogleRunTest
 */
@WebServlet("/GoogleRunTest")
public class GoogleRunTest extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public GoogleRunTest() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// run tests
		RunUtil.runGoogleTest();

		// read results
		String string = ResultUtil.readGoogleResult();

		response.setContentType("application/json");
		response.getWriter().write(string);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

class RunUtil {
	public static void runGoogleTest() {
		String batchDirectory = "C:\\Users\\andrewsrahn\\Documents\\spring-developer\\cucumber-serverr\\batches\\GoogleRunTest.bat";
		try {
			Runtime.getRuntime().exec("cmd /c " + batchDirectory);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}

class ResultUtil {
	public static String readGoogleResult() {
		try {

			String resultsDirectory = "C:\\Users\\andrewsrahn\\Documents\\spring-developer\\cucumber-serverr\\results\\google_search.json";
			BufferedReader bufferedReader = new BufferedReader(new FileReader(new File(resultsDirectory)));
			String string = "";

			while (bufferedReader.ready())
				string += bufferedReader.readLine();

			bufferedReader.close();
			return string;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "{'problems': 'true'}";
	}
}
